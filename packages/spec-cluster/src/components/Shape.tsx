import { Html } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"
import { BackSide } from "three"

export type ShapeGeometryProps =
  | { type: "Sphere"; args: ThreeFiber.SphereGeometryProps["args"] }
  | { type: "Box"; args: ThreeFiber.BoxGeometryProps["args"] }
  | { type: "Cone"; args: ThreeFiber.ConeGeometryProps["args"] }

export type ShapeProps = {
  position: ThreeFiber.MeshProps["position"]
  size: ShapeGeometryProps
  color: ThreeFiber.MeshStandardMaterialProps["color"]
  id: string
  onClick?: ThreeFiber.MeshProps["onClick"]
  showID?: boolean
  label: string
  isSelected?: boolean
  shape: string
}

// adjsut sizing issue
export default function Shape(props: ShapeProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <group position={props.position} onClick={props.onClick}>
      {props.isSelected && (
        <mesh scale={[1.3, 1.3, 1.3]}>
          {props.shape === "Sphere" && <sphereGeometry args={props.size} />}
          {props.shape === "Cube" && <boxGeometry args={props.size} />}
          {props.shape === "Pyramid" && <coneGeometry args={props.size} />}
          <meshBasicMaterial color="black" side={BackSide} />
        </mesh>
      )}
      <mesh userData={{ id: props.id }}>
        {props.shape === "Sphere" && <sphereGeometry args={props.size} />}
        {props.shape === "Cube" && <boxGeometry args={props.size} />}
        {props.shape === "Pyramid" && <coneGeometry args={props.size} />}
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
