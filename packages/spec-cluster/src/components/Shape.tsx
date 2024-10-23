import { Html } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"
import { BackSide, SphereGeometry } from "three"

export type ShapeGeometryProps =
  | { type: "Sphere"; args: ThreeFiber.SphereGeometryProps["args"] }
  | { type: "Box"; args: ThreeFiber.BoxGeometryProps["args"] }
  | { type: "Cone"; args: ThreeFiber.ConeGeometryProps["args"] }

export type ShapeProps = {
  position: ThreeFiber.MeshProps["position"]
  shape: ShapeGeometryProps
  color: ThreeFiber.MeshStandardMaterialProps["color"]
  id: string
  onClick?: ThreeFiber.MeshProps["onClick"]
  showID?: boolean
  label: string
  isSelected?: boolean
}

export default function Shape(props: ShapeProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <group position={props.position} onClick={props.onClick}>
      {props.isSelected && (
        <mesh scale={[1.3, 1.3, 1.3]}>
          {props.shape.type === "Sphere" ? (
            <sphereGeometry args={props.shape.args} />
          ) : props.shape.type === "Box" ? (
            <boxGeometry args={props.shape.args} />
          ) : props.shape.type === "Cone" ? (
            <coneGeometry args={props.shape.args} />
          ) : null}
          <meshBasicMaterial color="black" side={BackSide} />
        </mesh>
      )}
      <mesh userData={{ id: props.id }}>
        {props.shape.type === "Sphere" ? (
          <sphereGeometry args={props.shape.args} />
        ) : props.shape.type === "Box" ? (
          <boxGeometry args={props.shape.args} />
        ) : props.shape.type === "Cone" ? (
          <coneGeometry args={props.shape.args} />
        ) : null}
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
