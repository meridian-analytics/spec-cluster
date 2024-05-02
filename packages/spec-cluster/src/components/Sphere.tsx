import type * as ThreeFiber from "@react-three/fiber"

export type SphereProps = {
  position: ThreeFiber.MeshProps["position"]
  size: ThreeFiber.SphereGeometryProps["args"]
}

export default function Sphere(props: SphereProps) {
  return (
    <mesh position={props.position}>
      <sphereGeometry args={props.size} />
      <meshStandardMaterial color={"lightblue"} />
    </mesh>
  )
}
