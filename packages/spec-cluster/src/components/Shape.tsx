import { Html } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"
import { BackSide } from "three"

export type ShapeProps = {
  position: ThreeFiber.MeshProps["position"]
  // size: ThreeFiber.SphereGeometryProps["args"]
  size: ThreeFiber.BoxGeometryProps["args"]
  color: ThreeFiber.MeshStandardMaterialProps["color"]
  id: string
  onClick?: ThreeFiber.MeshProps["onClick"]
  showID?: boolean
  label: string
  isSelected?: boolean
  shape: string
}
//todo: need to rename this component to 'shape' or something else
// adjsut sizing issue
export default function Shape(props: ShapeProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <group position={props.position} onClick={props.onClick}>
      {props.isSelected && (
        <mesh scale={[1.3, 1.3, 1.3]}>
          {props.shape === "Sphere" && <sphereGeometry />}
          {props.shape === "Cube" && <boxGeometry />}
          {props.shape === "Pyramid" && <coneGeometry args={[1, 1.5, 3]} />}
          <meshBasicMaterial color="black" side={BackSide} />
        </mesh>
      )}
      <mesh userData={{ id: props.id }}>
        {props.shape === "Sphere" && <sphereGeometry />}
        {props.shape === "Cube" && <boxGeometry />}
        {props.shape === "Pyramid" && <coneGeometry args={[20, 1.5, 3]} />}
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

// export type ShapeSize =
//   | { type: "Sphere"; args: ThreeFiber.SphereGeometryProps["args"] } // [radius, widthSegments?, heightSegments?]
//   | { type: "Box"; args: ThreeFiber.BoxGeometryProps["args"] } // [width, height, depth]
//   | { type: "Cone"; args: ThreeFiber.ConeGeometryProps["args"] } // [radius, height, radialSegments]
// size: ShapeSize // Use the unified size type

// const sizeConfig = {
//   Sphere: { type: "Sphere", args: [1, 32, 32] }, // radius, widthSegments, heightSegments
//   Box: { type: "Box", args: [1, 1, 1] }, // width, height, depth
//   Cone: { type: "Cone", args: [1, 2, 32] }, // radius, height, radialSegments
// }
