import { Html } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"
import * as React from "react"

export type SphereProps = {
  position: ThreeFiber.MeshProps["position"]
  size: ThreeFiber.SphereGeometryProps["args"]
  color: ThreeFiber.MeshStandardMaterialProps["color"]
  id: string
}

export default function Sphere(props: SphereProps) {
  const [isClicked, setIsClicked] = React.useState(false)
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <mesh
      position={props.position}
      onClick={() => {
        setIsClicked(prevState => !prevState)
      }}
    >
      <sphereGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
      {isClicked && (
        <Html>
          <div>{props.id}</div>
        </Html>
      )}
    </mesh>
  )
}
