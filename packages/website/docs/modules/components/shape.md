---
sidebar_position: 2
title: Shape
---

The Shape component is responsible for rendering individual spectrogram entities as shapes, with **spheres** as the default, in the 3D space and is utilized by the Scene component. This component allows customization of its position, size, color, shape and click interaction behavior.

### ShapeProps
The Shape component accepts the following props:

- `position`: Defines the position of the entity in 3D space.
- `size`: Specifies the size of the entity using the arguments for the specified shape.
- `color`: Sets the color of the entity using the properties of **MeshStandardMaterial**.
- `id`: A unique identifier for the entity, stored in **userData**.
- `onClick` (optional): An event handler function triggered when the entity is clicked.
- `showID` (optional): A boolean that determines whether to display the ID label.
- `label`: The text label to display if **showID** is true.
- `isSelected` (optional): A boolean that indicates if the entity is currently selected.
- `shape`: Defines the shape of the entity using the respective geometry.

```typescript
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
```

### ShapeGeometryProps
Defines the different geometries for the shapes already provided by Three Fiber.

```typescript
export type ShapeGeometryProps =
  | { type: "Sphere"; args: ThreeFiber.SphereGeometryProps["args"] }
  | { type: "Box"; args: ThreeFiber.BoxGeometryProps["args"] }
  | { type: "Cone"; args: ThreeFiber.ConeGeometryProps["args"] }
```

### Component Structure
* **Main Mesh**: Renders a geometric shape based on the `geometry.type` value, using **meshStandardMaterial** with the specified color.
```javascript
    <mesh userData={{ id: props.id }}>
        { geometry.type === "Sphere" ? (<sphereGeometry args={geometry.args}/>) 
        : geometry.type === "Box" ? (<boxGeometry args={geometry.args}/> ) 
        : geometry.type === "Cone" ? (<coneGeometry args={geometry.args}/>) : null }
        <meshStandardMaterial color={props.color} />
    </mesh>
```
* **Selected Mesh**: Renders when `isSelected` is true, using a slightly larger scale and a black ring around the selected entity.
```javascript
    {props.isSelected && ( 
      <mesh scale={[1.3, 1.3, 1.3]}>
        { geometry.type === "Sphere" ? (<sphereGeometry args={geometry.args} />) 
        : geometry.type === "Box" ? (<boxGeometry args={geometry.args} />) 
        : geometry.type === "Cone" ? (<coneGeometry args={geometry.args} />) : null }
      <meshBasicMaterial color="black" side={BackSide} />
      </mesh>
    )}
```
* Each entity can respond to click events via the `onClick` prop, allowing for user interaction.


### Usage Example

To use the Shape component, import it and include it in your Three.js scene. Customize it by passing the necessary props.
Below is an example of how it is used in the Scene component.

```javascript
import Shape from './path/to/Shape';

<Shape
  position={[ point.dim1 * scaleX, point.dim2 * scaleY, point.dim3 * scaleZ]}
  shape={point.shape}
  size={point.size}
  color={point.color}
  label={point.label}
  id={point.filename}
  showID={selection.has(point.filename)}
  onClick={() => props.onSpecClick?.(point)}
  isSelected={selection.has(point.filename)}
/>
```
