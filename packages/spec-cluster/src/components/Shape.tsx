import { Html } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"
import { BackSide } from "three"

export enum ShapeType {
  cube = "cube",
  pyramid = "pyramid",
  sphere = "sphere",
}

export type ShapeProps = {
  position: ThreeFiber.MeshProps["position"]
  shape: ShapeType
  size: number
  color: ThreeFiber.MeshStandardMaterialProps["color"]
  id: string
  onClick?: ThreeFiber.MeshProps["onClick"]
  showID?: boolean
  label: string
  isSelected?: boolean
}

function makeGeometry(shape: ShapeType, size: number) {
  if (shape === ShapeType.cube)
    return <boxGeometry args={[size * 1.5, size * 1.5, size * 1.5]} />
  if (shape === ShapeType.pyramid)
    return <coneGeometry args={[size, 2 * size, 4]} />
  if (shape === ShapeType.sphere)
    return <sphereGeometry args={[size, 64, 32]} />
  throw Error(`Invalid shape type ${shape}`)
}

export default function Shape(props: ShapeProps) {
  const geometry = makeGeometry(props.shape, props.size)
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <group position={props.position} onClick={props.onClick}>
      {props.isSelected && (
        <mesh scale={[1.3, 1.3, 1.3]}>
          {geometry}
          <meshBasicMaterial color="black" side={BackSide} />
        </mesh>
      )}
      <mesh userData={{ id: props.id }}>
        {geometry}
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
