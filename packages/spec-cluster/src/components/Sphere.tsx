import { Html } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"
import { BackSide } from "three"

export type SphereProps = {
  position: ThreeFiber.MeshProps["position"]
  size: ThreeFiber.SphereGeometryProps["args"]
  color: ThreeFiber.MeshStandardMaterialProps["color"]
  id: string
  onClick?: ThreeFiber.MeshProps["onClick"]
  showID?: boolean
  label: string
  isSelected?: boolean
}

export default function Sphere(props: SphereProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <group position={props.position} onClick={props.onClick}>
      {props.isSelected && (
        <mesh scale={[1.3, 1.3, 1.3]}>
          <sphereGeometry args={props.size} />
          <meshBasicMaterial color="black" side={BackSide} />
        </mesh>
      )}
      <mesh userData={{ id: props.id }}>
        <sphereGeometry args={props.size} />
        <meshStandardMaterial color={props.color} />
      </mesh>
      {props.showID && (
        <Html>
          <div>{props.label}</div>
        </Html>
      )}
    </group>
  )
}
