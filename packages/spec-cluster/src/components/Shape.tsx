import { Html } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"
import { BackSide, SphereGeometry } from "three"

export type ShapeGeometryProps =
  | { type: "Sphere"; args: ThreeFiber.SphereGeometryProps["args"] }
  | { type: "Box"; args: ThreeFiber.BoxGeometryProps["args"] }
  | { type: "Cone"; args: ThreeFiber.ConeGeometryProps["args"] }

export type ShapeProps = {
  position: ThreeFiber.MeshProps["position"]
  shape: string
  size: number
  color: ThreeFiber.MeshStandardMaterialProps["color"]
  id: string
  onClick?: ThreeFiber.MeshProps["onClick"]
  showID?: boolean
  label: string
  isSelected?: boolean
}

function makeGeometry(shape: string, size: number): ShapeGeometryProps {
  if (shape === "Cube")
    return {
      type: "Box",
      args: [size * 1.5, size * 1.5, size * 1.5],
    }
  if (shape === "Pyramid") return { type: "Cone", args: [size, 2 * size, 4] }
  if (shape === "Sphere") return { type: "Sphere", args: [size, 64, 32] }
  throw Error(`Invalid shape type ${shape}`)
}

export default function Shape(props: ShapeProps) {
  const geometry = makeGeometry(props.shape, props.size)
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <group position={props.position} onClick={props.onClick}>
      {props.isSelected && (
        <mesh scale={[1.3, 1.3, 1.3]}>
          {geometry.type === "Sphere" ? (
            <sphereGeometry args={geometry.args} />
          ) : geometry.type === "Box" ? (
            <boxGeometry args={geometry.args} />
          ) : geometry.type === "Cone" ? (
            <coneGeometry args={geometry.args} />
          ) : null}
          <meshBasicMaterial color="black" side={BackSide} />
        </mesh>
      )}
      <mesh userData={{ id: props.id }}>
        {geometry.type === "Sphere" ? (
          <sphereGeometry args={geometry.args} />
        ) : geometry.type === "Box" ? (
          <boxGeometry args={geometry.args} />
        ) : geometry.type === "Cone" ? (
          <coneGeometry args={geometry.args} />
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
