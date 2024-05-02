import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useContext } from "../contexts/Configurator.js"
import Spec from "./Spec.js"
import Sphere from "./Sphere.js"

type Spectrogram = {
  filename: string
  dim1: number
  dim2: number
  dim3: number
}

export type SceneProps = {
  spectrograms: Spectrogram[]
}

export default function Scene(props: SceneProps) {
  const { renderMode, scaleX, scaleY, scaleZ } = useContext()
  return (
    <>
      <Canvas camera={{ position: [0, 0, 100] }}>
        <Suspense fallback={null}>
          <directionalLight position={[0, 0, 2]} />
          <ambientLight />
          {renderMode === 0 &&
            props.spectrograms.map((point, index) => (
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
          {renderMode === 1 &&
            props.spectrograms.map((point, index) => (
              <Sphere
                key={point.filename}
                position={[
                  point.dim1 * scaleX,
                  point.dim2 * scaleY,
                  point.dim3 * scaleZ,
                ]}
                size={[0.3, 30, 30]}
              />
            ))}

          <OrbitControls
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
            maxDistance={120}
            minDistance={5}
          />
        </Suspense>
      </Canvas>
    </>
  )
}
