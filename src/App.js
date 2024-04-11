import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense, useRef, useState } from "react";
// eslint-disable-next-line
import { Html, OrbitControls, useTexture } from "@react-three/drei";

import Spectrograms from "./data.json";

function Spec({ position, size, color, url }) {
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
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <planeGeometry args={[1, 1, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        // color={isHovered ? color : "lightblue"}
      />
      {/* <Html distanceFactor={10}>
        <div className={isClicked ? "show-content" : "hide-content"}>id ##</div>
      </Html> */}
    </mesh>
  );
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 100] }}>
      <Suspense fallback={null}>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight />

        {Spectrograms.map((point) => (
          <Spec
            url={`/spectrogram_plots/${point.filename}_spectrogram.png`}
            position={[point.dim1, point.dim2, point.dim3]}
          />
        ))}
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          maxDistance={[75]}
          minDistance={[15]}
        />
        {/* <axesHelper args={[25]} /> */}
      </Suspense>
    </Canvas>
  );
}

export default App;
