---
sidebar_position: 1
title: Spec
---

The Spec component is a React component built with **@react-three/fiber** and **@react-three/drei**. It renders a 3D plane with a texture loaded from a provided URL and supports interaction through a click event.

### SpecProps

The Spec component accepts the following props:

- `position`: Specifies the position of the plane in 3D space.
- `url`: URL of the texture to be applied to the plane.
- `id`: A unique identifier for the plane, stored in **userData**.
- `onClick` (optional): An event handler function triggered when the plane is clicked.
- `showID` (optional): A boolean that determines whether to display the label.
- `size`: Defines the size of the plane using the arguments for the **PlaneGeometry**.
- `label`: The text label to display if **showID** is true.

```typescript
export type SpecProps = {
  position: ThreeFiber.MeshProps["position"];
  url: string;
  id: string;
  onClick?: ThreeFiber.MeshProps["onClick"];
  showID?: boolean;
  size: ThreeFiber.PlaneGeometryProps["args"];
  label: string;
}
```

### Component Structure
*   The component renders a **mesh** containing a plane geometry with a texture:

```javascript
return (
  <mesh position={props.position} onClick={props.onClick} userData={{ id: props.id }}>
    <planeGeometry args={props.size} />
    <meshStandardMaterial map={texture} />
   <...>
  </mesh>
);
```
*   The **meshStandardMaterial** uses the loaded texture from the `url` prop to texture the plane. Refer to the spec visualization example code to see how this is implemented with spectrogram images.

*   Each plane can also respond to click events via the `onClick` prop, allowing for user interaction.

### Usage Example

To use the Spec component, import it and include it in your Three.js scene, passing the necessary props. Below is an example of how it is used in the Scene component.

```javascript
import Spec from './path/to/Spec';

<Spec
  key={point.filename}
  url={`/path/to/spectrograms/${point.filename}.png`}
  position={[ point.dim1 * scaleX, point.dim2 * scaleY, point.dim3 * scaleZ]}
  id={point.filename}
  size={[point.width, point.height, 64, 64]}
  label={point.label}
  showID={selection.has(point.filename)}
  onClick={() => props.onSpecClick?.(point)}
/>
```

