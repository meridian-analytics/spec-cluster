import { Html, useTexture } from "@react-three/drei"
import type * as ThreeFiber from "@react-three/fiber"
import * as React from "react"

export type SpecProps = {
  position: ThreeFiber.MeshProps["position"]
  url: string
  id: string
  onClick?: ThreeFiber.MeshProps["onClick"]
  showID?: boolean
}

export default function Spec(props: SpecProps) {
  const texture = useTexture(props.url)
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <mesh position={props.position} onClick={props.onClick}>
      <planeGeometry args={[3, 3, 64, 64]} />
      <meshStandardMaterial map={texture} />
      {props.showID && (
        <Html>
          <div>{props.id}</div>
        </Html>
      )}
    </mesh>
  )
}
