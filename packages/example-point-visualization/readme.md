# Point Visualization

This example demonstrates how spectrogram data can be visualized as interactive spheres (or points) in a 3D space using the `spec-cluster` package. The user can select individual or multiple points and interact with them through the custom UI components.

## Key Features

### Selection Context

The **Selection Context** tracks which spectrogram points are selected when a user clicks on them. It supports two modes of selection:

1. **Single Select:** Clicking on a single point selects it.
2. **Multi-Select:** Holding the `Shift` key while dragging creates a marquee, selecting all points within that marquee.

The selection is managed by the `Selection.Provider`, which tracks the selected points in a `Set`. These selected points can be further manipulated via the custom **MultiSelectEditor**.

### MultiSelectEditor

The **MultiSelectEditor** is a local UI component that allows users to modify the properties of selected points. Once points are selected, this editor provides options to adjust:

- **Color:** Change the color of the selected points.
- **Radius:** Adjust the size of the spheres.
- **Label:** Add or modify the label for the selected points.

This component is displayed only when one or more points are selected.

### Scene Component

The **Scene Component** renders the spectrograms as spheres (or points) in a 3D space, using the `renderMode` prop set to `"dot"` for this demo.

- **`renderMode`:** Set to `"dot"` to display spectrograms as points or spheres. The `"image"` mode is covered in another demo [link to spec viz doc].
- **`onSpecClick`:** Handles point selection by updating the `Selection` context. When a point is clicked, its filename is added to or removed from the selection.
  
- **`controls`:** These allow for adjusting the camera view of the 3D scene, offering flexibility for users to pan, zoom, and rotate:

  ```tsx
  <Scene
    ...
    controls={{
      minAzimuthAngle: -Math.PI / 4,
      maxAzimuthAngle: Math.PI / 4,
      minPolarAngle: Math.PI / 6,
      maxPolarAngle: Math.PI - Math.PI / 6,
      maxDistance: 120,
      minDistance: 5,
    }}
    ...
  />
  ```

Users can modify these controls to suit their preferences for how they interact with the 3D environment.

### Table View

The **TableView** component is another local UI element that displays a list of selected points in a table format. It provides detailed metadata about the selected points, including:

- **Filename**
- **Dimensions**
- **Optional metadata** like color, radius, and label

This gives users a comprehensive overview of all selected points and their properties.

### Configurator Context and Interface Component

The `Configurator` context works with the `Interface` component to allow users to adjust the position of the spectrograms in the 3D space using sliders. These sliders modify the x, y, and z axes.

For more details, refer to the [Configurator context doc] and [Interface component doc].

### Error Handling

The demo includes basic error handling through `react-error-boundary`, ensuring that any issues are caught and a simple error message is displayed. Users can retry after an error occurs.
