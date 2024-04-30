import React, { useRef } from "react";

function Sphere({ position, size }) {
  const ref = useRef();

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={"lightblue"} />
    </mesh>
  );
}

export default Sphere;
