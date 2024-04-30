import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";

function Spec({ position, url }) {
  const ref = useRef();
  const texture = useTexture(url);

  return (
    <mesh position={position} ref={ref}>
      <planeGeometry args={[3, 3, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Spec;
