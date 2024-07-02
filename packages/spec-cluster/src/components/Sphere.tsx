import { Html } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"
import * as React from "react"

export type SphereProps = {
  position: ThreeFiber.MeshProps["position"]
  size: ThreeFiber.SphereGeometryProps["args"]
  color: ThreeFiber.MeshStandardMaterialProps["color"]
  id: string
  onClick?: ThreeFiber.MeshProps["onClick"]
  showID?: boolean
}

export default function Sphere(props: SphereProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <mesh position={props.position} onClick={props.onClick}>
      <sphereGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
      {props.showID && (
        <Html>
          <div>{props.id}</div>
        </Html>
      )}
    </mesh>
  )
}
