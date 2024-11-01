---
sidebar_position: 3
title: Scene
---

The `Scene` component renders a 3D visualization of the provided spectrograms, allowing user interaction and selection. It manages the following:

1. **Canvas Setup**: Initializes a Three.js canvas with a specified camera position and event handling for selection clearing.
2. **Lighting**: Configures ambient and directional lighting in the scene.
3. **Rendering Spectrograms**: Based on the `renderMode`, it either renders the spectrograms as images using the `Spec` component or as shapes using the `Shape` component.
4. **Selection Handling**: Allows multiple spectrograms to be selected through mouse interactions when displayed as shapes.
5. **Camera Controls**: Implements orbit controls to navigate around the scene.

## SceneProps
- **`spectrograms`**: An array of `Spectrogram` objects to be rendered in the scene.
- **`camera`**: Optional camera settings including the position in 3D space.
- **`controls`**: Optional camera control settings to constrain camera movement.
- **`light`**: Optional lighting settings including the position of directional light.
- **`renderDotSize`**: Size of the rendered entities (if using dot mode).
- **`dotColor`**: Color of the rendered entities (if using dot mode).
- **`onSpecClick`**: Callback function triggered when a spectrogram is clicked.
- **`renderMode`**: Determines how the spectrograms are rendered - as "image" or "dot".


```typescript
export type SceneProps = {
  spectrograms: Spectrogram[]
  camera?: {
    position?: Three.Vector3
  }
  controls?: {
    minAzimuthAngle?: number
    maxAzimuthAngle?: number
    minPolarAngle?: number
    maxPolarAngle?: number
    maxDistance?: number
    minDistance?: number
  }
  light?: {
    position?: Three.Vector3
  }
  renderDotSize?: ShapeProps["size"]
  dotColor?: ShapeProps["color"]
  onSpecClick?: (point: Spectrogram) => void
  renderMode: "image" | "dot"
}
```

## Spectrogram Type
- **`filename`**: The name of the spectrogram file.
- **`dim1`**, **`dim2`**, **`dim3`**: Spatial dimensions of the spectrogram used for positioning in 3D space.
- **`size`**: The size of the entity representation (if applicable).
- **`color`**: The color of the spectrogram, specified as a hex code or English color name.
- **`width`**, **`height`**: Dimensions for rendering the image.
- **`label`**: A descriptive label for the spectrogram.
- **`flocation`**: A fake location made up for the spectrogram data.
- **`shape`**: The shape of the spectrogram

```typescript
export type Spectrogram = {
  filename: string
  dim1: number
  dim2: number
  dim3: number
  size: number
  color: string
  width: number
  height: number
  label: string
  flocation: string
  shape: string
}
```

## Usage Example
To use the `Scene` component, import it and include it in your demo app. Customize it by passing the necessary props.
Below is an example of how it is used in the spec visualization demo.

```javascript
<Scene
    renderMode="image"
    spectrograms={Array.from(spectrograms.values())}
    controls={{
        minAzimuthAngle: -Math.PI / 4,
        maxAzimuthAngle: Math.PI / 4,
        minPolarAngle: Math.PI / 6,
        maxPolarAngle: Math.PI - Math.PI / 6,
        maxDistance: 120,
        minDistance: 5,
    }}
    onSpecClick={point => {
        setFocusedItem(point)
    }}
/>
```

