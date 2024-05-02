import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useContext } from "../contexts/Configurator.js"
import Spectrograms from "../data.json"
import Spec from "./Spec.js"
import Sphere from "./Sphere.js"

export type SceneProps = unknown // todo

export default function Scene() {
  const { renderMode, scaleX, scaleY, scaleZ } = useContext()

  return (
    <>
      <Canvas camera={{ position: [0, 0, 100] }}>
        <Suspense fallback={null}>
          <directionalLight position={[0, 0, 2]} />
          <ambientLight />
          {renderMode === 0 &&
            Spectrograms.map((point, index) => (
              <Spec
                key={String(index)}
                url={`/spectrogram_plots/${point.filename}_spectrogram.png`}
                position={[
                  Number.parseFloat(point.dim1) * scaleX,
                  Number.parseFloat(point.dim2) * scaleY,
                  Number.parseFloat(point.dim3) * scaleZ,
                ]}
              />
            ))}
          {renderMode === 1 &&
            Spectrograms.map((point, index) => (
              <Sphere
                key={String(index)}
                position={[
                  Number.parseFloat(point.dim1) * scaleX,
                  Number.parseFloat(point.dim2) * scaleY,
                  Number.parseFloat(point.dim3) * scaleZ,
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