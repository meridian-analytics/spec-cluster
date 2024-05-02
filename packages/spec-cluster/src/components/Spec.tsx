import { useTexture } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"

export type SpecProps = {
  position: ThreeFiber.MeshProps["position"]
  url: string
}

export default function Spec(props: SpecProps) {
  const texture = useTexture(props.url)
  return (
    <mesh position={props.position}>
      <planeGeometry args={[3, 3, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}
