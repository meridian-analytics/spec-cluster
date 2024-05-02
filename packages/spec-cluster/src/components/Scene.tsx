import { OrbitControls } from "@react-three/drei"
import * as Three from "@react-three/fiber"
import { Suspense } from "react"
import * as Configurator from "../contexts/Configurator.js"
import Spec from "./Spec.js"
import Sphere, { type SphereProps } from "./Sphere.js"

type Spectrogram = {
  filename: string
  dim1: number
  dim2: number
  dim3: number
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
  renderDotSize?: SphereProps["size"]
}

export default function Scene(props: SceneProps) {
  const { renderMode, scaleX, scaleY, scaleZ } = Configurator.useContext()
  return (
    <Three.Canvas camera={{ position: props.camera?.position ?? [0, 0, 100] }}>
      <Suspense fallback={null}>
        <directionalLight position={props.light?.position ?? [0, 0, 2]} />
        <ambientLight />
        {renderMode === Configurator.RenderMode.image &&
          props.spectrograms.map(point => (
            <Spec
              key={point.filename}
              url={`/spectrogram_plots/${point.filename}_spectrogram.png`}
              position={[
                point.dim1 * scaleX,
                point.dim2 * scaleY,
                point.dim3 * scaleZ,
              ]}
            />
          ))}
        {renderMode === Configurator.RenderMode.dot &&
          props.spectrograms.map(point => (
            <Sphere
              key={point.filename}
              position={[
                point.dim1 * scaleX,
                point.dim2 * scaleY,
                point.dim3 * scaleZ,
              ]}
              size={props.renderDotSize ?? [1, 1, 1]}
            />
          ))}
        <OrbitControls
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
