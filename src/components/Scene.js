import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spectrograms from "../data.json";
import Spec from "./Spec.js";
import Sphere from "./Sphere";
import { useConfigurator } from "../contexts/Configurator.js";

function Scene() {
  const { renderMode, scaleX, scaleY, scaleZ } = useConfigurator();

  return (
    <>
      <Canvas camera={{ position: [0, 0, 100] }}>
        <Suspense fallback={null}>
          <directionalLight position={[0, 0, 2]} />
          <ambientLight />
          {renderMode === 0 &&
            Spectrograms.map((point, index) => (
              <Spec
                key={index}
                url={`/spectrogram_plots/${point.filename}_spectrogram.png`}
                position={[
                  point.dim1 * scaleX,
                  point.dim2 * scaleY,
                  point.dim3 * scaleZ,
                ]}
              />
            ))}
          {renderMode === 1 &&
            Spectrograms.map((point, index) => (
              <Sphere
                key={index}
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
            maxDistance={[120]}
            minDistance={[5]}
          />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Scene;
