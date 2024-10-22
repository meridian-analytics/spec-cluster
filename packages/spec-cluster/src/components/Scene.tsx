import { OrbitControls, Select } from "@react-three/drei"
import * as Three from "@react-three/fiber"
import { Suspense } from "react"
import * as Configurator from "../contexts/Configurator.js"
import * as Selection from "../contexts/Selection.js"
import Shape, { type ShapeProps } from "./Shape.js"
import Spec from "./Spec.js"

export type Spectrogram = {
  filename: string
  dim1: number
  dim2: number
  dim3: number
  size: number
  /**
   * Spectrogram.color: Hex code or English color name such as blue or red*/
  color: string
  width: number
  height: number
  label: string
  flocation: string
  shape: string
}

export type SceneProps = {
  spectrograms: Spectrogram[]
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
  renderDotSize?: ShapeProps["size"]
  dotColor?: ShapeProps["color"]
  onSpecClick?: (point: Spectrogram) => void
  renderMode: "image" | "dot"
}

export default function Scene(props: SceneProps) {
  const { scaleX, scaleY, scaleZ } = Configurator.useContext()
  const { selection, updateSelection, clearSelection } = Selection.useContext()

  return (
    <Three.Canvas
      camera={{ position: props.camera?.position ?? [0, 0, 100] }}
      onPointerMissed={clearSelection}
    >
      <Suspense fallback={null}>
        <directionalLight position={props.light?.position ?? [0, 0, 2]} />
        <ambientLight />
        <Select
          box
          multiple
          onChangePointerUp={meshes => {
            updateSelection(meshes.map(mesh => mesh.userData.id ?? ""))
          }}
        >
          {props.renderMode === "image" &&
            props.spectrograms.map(point => (
              <Spec
                key={point.filename}
                url={`/spectrogram_plots/${point.filename}_spectrogram.png`}
                position={[
                  point.dim1 * scaleX,
                  point.dim2 * scaleY,
                  point.dim3 * scaleZ,
                ]}
                id={point.filename}
                size={[point.width, point.height, 64, 64]}
                label={point.label}
                showID={selection.has(point.filename)}
                onClick={() => props.onSpecClick?.(point)}
              />
            ))}
          {props.renderMode === "dot" &&
            props.spectrograms.map(point => (
              <Shape
                key={point.filename}
                position={[
                  point.dim1 * scaleX,
                  point.dim2 * scaleY,
                  point.dim3 * scaleZ,
                ]}
                size={
                  point.shape === "Cube"
                    ? [point.size * 1.5, point.size * 1.5, point.size * 1.5]
                    : point.shape === "Pyramid"
                      ? [point.size, 2 * point.size, 4]
                      : [point.size, 64, 32]
                }
                color={point.color}
                label={point.label}
                id={point.filename}
                shape={point.shape}
                showID={selection.has(point.filename)}
                onClick={() => props.onSpecClick?.(point)}
                isSelected={selection.has(point.filename)}
              />
            ))}
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
