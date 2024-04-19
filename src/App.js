import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense, useRef, useState } from "react";
// eslint-disable-next-line
import { Html, OrbitControls, useTexture } from "@react-three/drei";

import Spectrograms from "./coordinates.json";
import Interface from "./components/Interface.js";
import { useConfigurator } from "./contexts/Configurator.js";

function Spec({ position, url }) {
  //allows a refrence on a particular object in this case we want it on the mesh of the object
  const ref = useRef();
  // eslint-disable-next-line
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const texture = useTexture(url);

  return (
    <mesh
      position={position}
      ref={ref}
      // onPointerEnter={(event) => {
      //   event.stopPropagation();
      //   setIsHovered(true);
      // }}
      // onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <planeGeometry args={[3, 3, 64, 64]} />
      <meshStandardMaterial map={texture} />
      {/* <Html distanceFactor={10}>
        <div className={isClicked ? "show-content" : "hide-content"}>id ##</div>
      </Html> */}
    </mesh>
  );
}

function Sphere({ position, size, color }) {
  //allows a refrence on a particular object in this case we want it on the mesh of the object
  const ref = useRef();

  // const [isHovered, setIsHovered] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={"lightblue"} />
      {/* <Html distanceFactor={10}>
        <div className={isClicked ? "show-content" : "hide-content"}>id ##</div>
      </Html> */}
    </mesh>
  );
}
function App() {
  const { renderMode, scaleX, scaleY, scaleZ } = useConfigurator();
  console.log(scaleX);
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
                // position={[point.dim1 * 7, point.dim2 * 5, point.dim3]}
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
                color={"lightblue"}
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
          {/* <axesHelper args={[50]} /> */}
        </Suspense>
      </Canvas>
      <Interface></Interface>
    </>
  );
}

export default App;
