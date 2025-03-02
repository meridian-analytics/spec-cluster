import { OrbitControls, Select } from "@react-three/drei"
import { Html, useTexture } from "@react-three/drei"
import * as Three from "@react-three/fiber"
import type * as ThreeFiber from "@react-three/fiber"
import { Suspense } from "react"
import * as React from "react"
import { BackSide } from "three"
import * as Configurator from "../contexts/Configurator"
import * as Selection from "../contexts/Selection"
import * as UserData from "../contexts/UserData"
import type { Spectrogram } from "./Spectrogram"
import { ShapeType } from "./Spectrogram"

export type SceneProps = {
  camera?: {
    position?: Three.Vector3
  }
  controls?: {
    minAzimuthAngle?: number
    maxAzimuthAngle?: number
    minPolarAngle?: number
    maxPolarAngle?: number
    maxDistance?: number
    minDistance?: number
  }
  light?: {
    position?: Three.Vector3
  }
  dotColor?: Spectrogram["color"]
  onSpecClick?: (point: Spectrogram) => void
}

export default function Scene(props: SceneProps) {
  const config = Configurator.useContext()
  const userData = UserData.useContext()
  const selection = Selection.useContext()
  return (
    <Three.Canvas
      camera={{ position: props.camera?.position ?? [0, 0, 100] }}
      onPointerMissed={selection.clearSelection}
    >
      <Suspense fallback={null}>
        <directionalLight position={props.light?.position ?? [0, 0, 2]} />
        <ambientLight />
        <Select
          box
          multiple
          onChangePointerUp={meshes => {
            selection.updateSelection(
              meshes.map(mesh => mesh.userData.id ?? ""),
            )
          }}
        >
          {Array.from(
            userData.spectrograms.values(),
            config.renderMode === "image"
              ? spec => (
                  <Spec
                    key={spec.id}
                    spectrogram={spec}
                    onClick={() => props.onSpecClick?.(spec)}
                  />
                )
              : spec => (
                  <Shape
                    key={spec.id}
                    spectrogram={spec}
                    onClick={() => props.onSpecClick?.(spec)}
                  />
                ),
          )}
        </Select>
        <OrbitControls
          makeDefault
          minAzimuthAngle={props.controls?.minAzimuthAngle}
          maxAzimuthAngle={props.controls?.maxAzimuthAngle}
          minPolarAngle={props.controls?.minPolarAngle}
          maxPolarAngle={props.controls?.maxPolarAngle}
          maxDistance={props.controls?.maxDistance}
          minDistance={props.controls?.minDistance}
        />
      </Suspense>
    </Three.Canvas>
  )
}

type ShapeProps = {
  spectrogram: Spectrogram
  onClick?: ThreeFiber.MeshProps["onClick"]
}

function Shape(props: ShapeProps) {
  const config = Configurator.useContext()
  const selection = Selection.useContext()
  const isSelected = selection.selection.has(props.spectrogram.id)
  const geometry = (
    <ShapeGeometry
      shape={props.spectrogram.shape ?? ShapeType.sphere}
      size={props.spectrogram.size ?? 0.9}
    />
  )
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <group
      position={[
        props.spectrogram.dim1 * config.scaleX,
        props.spectrogram.dim2 * config.scaleY,
        props.spectrogram.dim3 * config.scaleZ,
      ]}
      onClick={props.onClick}
    >
      {isSelected && (
        <mesh scale={[1.3, 1.3, 1.3]}>
          {geometry}
          <meshBasicMaterial color="black" side={BackSide} />
        </mesh>
      )}
      <mesh userData={{ id: props.spectrogram.id }}>
        {geometry}
        <meshStandardMaterial color={props.spectrogram.color ?? "Blue"} />
      </mesh>
      {isSelected && (
        <Html>
          <div>{props.spectrogram.label}</div>
        </Html>
      )}
    </group>
  )
}

type ShapeGeometryProps = {
  shape: ShapeType
  size: number
}

function ShapeGeometry({ shape, size }: ShapeGeometryProps) {
  if (shape === ShapeType.cube)
    return <boxGeometry args={[size * 1.5, size * 1.5, size * 1.5]} />
  if (shape === ShapeType.pyramid)
    return <coneGeometry args={[size, 2 * size, 4]} />
  if (shape === ShapeType.sphere)
    return <sphereGeometry args={[size, 64, 32]} />
  throw Error(`Invalid shape type ${shape}`)
}

type SpecProps = {
  onClick?: ThreeFiber.MeshProps["onClick"]
  spectrogram: Spectrogram
}

function Spec(props: SpecProps) {
  const userData = UserData.useContext()
  const config = Configurator.useContext()
  const selection = Selection.useContext()
  const url = React.useMemo(
    () =>
      props.spectrogram.image instanceof File
        ? URL.createObjectURL(props.spectrogram.image)
        : `${userData.baseUrl}/${props.spectrogram.image}`,
    [props.spectrogram.image, userData.baseUrl],
  )
  React.useEffect(() => {
    return () => {
      URL.revokeObjectURL(url)
    }
  }, [url])
  const texture = useTexture(url)
  const showId = selection.selection.has(props.spectrogram.id)
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <mesh
      position={[
        props.spectrogram.dim1 * config.scaleX,
        props.spectrogram.dim2 * config.scaleY,
        props.spectrogram.dim3 * config.scaleZ,
      ]}
      onClick={props.onClick}
      userData={{ id: props.spectrogram.id }}
    >
      <planeGeometry
        args={[
          props.spectrogram.width ?? 3,
          props.spectrogram.height ?? 3,
          64,
          64,
        ]}
      />
      <meshStandardMaterial map={texture} />
      {showId && (
        <Html>
          <div>{props.spectrogram.label}</div>
        </Html>
      )}
    </mesh>
  )
}
