import { Html, useTexture } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"

export type SpecProps = {
  position: ThreeFiber.MeshProps["position"]
  url: string
  id: string
  onClick?: ThreeFiber.MeshProps["onClick"]
  showID?: boolean
  size: ThreeFiber.PlaneGeometryProps["args"]
  label: string
}

export default function Spec(props: SpecProps) {
  const texture = useTexture(props.url)
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <mesh
      position={props.position}
      onClick={props.onClick}
      userData={{ id: props.id }}
    >
      <planeGeometry args={props.size} />
      <meshStandardMaterial map={texture} />
      {props.showID && (
        <Html>
          <div>{props.label}</div>
        </Html>
      )}
    </mesh>
  )
}
