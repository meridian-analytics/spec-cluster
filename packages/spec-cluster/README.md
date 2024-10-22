# <a name="top"></a> spec-cluster

* [components](#components)
    * [spec](#spec)
    * [shape](#shape)
    * [scene](#scene)
    * [interface](#interface)
* [contexts](#contexts)
    * [user-data](#user-data)
    * [selection](#selection)
    * [focus](#focus)
    * [configurator](#configurator)
    * [clickmode](#clickmode)
* [dev](#dev)

# <a name="components"></a> components
Most components within the `spec-cluster` package are built using `@react-three/fiber` and `@react-three/drei`, which are popular libraries for integrating `Three.js` with React. Having a basic understanding of `Three.js` will greatly enhance your experience with `spec-cluster` and help you navigate its 3D visualization capabilities more effectively.

For more information on these libraries, refer to the [React Three Fiber Docs](https://r3f.docs.pmnd.rs/getting-started/introduction)

## <a name="spec"></a> spec
The `Spec` component is a React component built with `@react-three/fiber` and `@react-three/drei`. It renders a 3D plane with a texture loaded from a provided URL and supports interaction through a click event.

#### `SpecProps`

The `Spec` component accepts the following props:

- `position`: Specifies the position of the plane in 3D space.
- `url`: URL of the texture to be applied to the plane.
- `id`: A unique identifier for the plane, stored in `userData`.
- `onClick` (optional): An event handler function triggered when the plane is clicked.
- `showID` (optional): A boolean that determines whether to display the label.
- `size`: Defines the size of the plane using the arguments for the `PlaneGeometry`.
- `label`: The text label to display if `showID` is true.

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

#### Component Structure
*   The component renders a `mesh` containing a plane geometry with a texture:

```javascript
return (
  <mesh
    position={props.position}
    onClick={props.onClick}
    userData={{ id: props.id }}
  >
    <planeGeometry args={props.size} />
    <meshStandardMaterial map={texture} />
   <...>
  </mesh>
);
```
*   The `meshStandardMaterial` uses the loaded texture from the `url` prop to texture the plane. Refer to the `spec-visualization` demo to see how this is implemented with spectrogram images.

*   The plane can also respond to click events via the `onClick` prop, allowing for user interaction.

#### Usage

To use the `Spec` component, import it and include it in your Three.js scene, passing the necessary props. Below is an example of how it is used in the `Scene` component.

```javascript
import Spec from './path/to/Spec';
<Spec
    key={point.filename}
    url={`/spectrogram_plots/${point.filename}_spectrogram.png`}
    position={[
        point.dim1 * scaleX,
        point.dim2 * scaleY,
        point.dim3 * scaleZ,
    ]}
    id={point.filename}
    size={[point.width, point.height, 64, 64]}
    label={point.label}
    showID={selection.has(point.filename)}
    onClick={() => props.onSpecClick?.(point)}
/>
```

## <a name="shape"></a> shape
The `Shape` component is responsible for rendering individual spectrogram entities as shapes, with **spheres** as the default, in the 3D space and is utilized by the `Scene` component. This component allows customization of its position, size, color, shape and click interaction behavior.

#### `ShapeProps`

The `Shape` component accepts the following props:

- `position`: Defines the position of the entity in 3D space.
- `size`: Specifies the size of the entity using the arguments for the specified shape.
- `color`: Sets the color of the entity using the properties of `MeshStandardMaterial`.
- `id`: A unique identifier for the entity, stored in `userData`.
- `onClick` (optional): An event handler function triggered when the entity is clicked.
- `showID` (optional): A boolean that determines whether to display the ID label.
- `label`: The text label to display if `showID` is true.
- `isSelected` (optional): A boolean that indicates if the entity is currently selected.
- `shape`: Defines the shape of the entity using the respective geometry.

```typescript
export type SphereProps = {
  position: ThreeFiber.MeshProps["position"];
  size: ThreeFiber.SphereGeometryProps["args"];
  color: ThreeFiber.MeshStandardMaterialProps["color"];
  id: string;
  onClick?: ThreeFiber.MeshProps["onClick"];
  showID?: boolean;
  label: string;
  isSelected?: boolean;
  shape: string
}
```
#### `ShapeGeometryProps`
Defines the different geometries for the shapes already provided by Three Fiber.

```typescript
export type ShapeGeometryProps =
  | { type: "Sphere"; args: ThreeFiber.SphereGeometryProps["args"] }
  | { type: "Box"; args: ThreeFiber.BoxGeometryProps["args"] }
  | { type: "Cone"; args: ThreeFiber.ConeGeometryProps["args"] }
```

#### Component Structure
* Main Mesh: Renders a geometric shape based on the `props.shape` value, using `meshStandardMaterial` with the specified color.
```javascript
    <mesh userData={{ id: props.id }}>
        {props.shape === "Sphere" && <sphereGeometry args={props.size} />}
        {props.shape === "Cube" && <boxGeometry args={props.size} />}
        {props.shape === "Pyramid" && <coneGeometry args={props.size} />}
        <meshStandardMaterial color={props.color} />
    </mesh>
```
* Selected Mesh: Renders when `isSelected` is true, using a slightly larger scale and a black ring around the selected entity.
```javascript
    {props.isSelected && (
        <mesh scale={[1.3, 1.3, 1.3]}>
          {props.shape === "Sphere" && <sphereGeometry args={props.size} />}
          {props.shape === "Cube" && <boxGeometry args={props.size} />}
          {props.shape === "Pyramid" && <coneGeometry args={props.size} />}
          <meshBasicMaterial color="black" side={BackSide} />
        </mesh>
    )}
```
* The entity can respond to click events via the `onClick` prop, allowing for user interaction.

#### Usage

To use the `Shape` component, import it and include it in your Three.js scene. Customize it by passing the necessary props.
Below is an example of how it is used in the `Scene` component.
```javascript
import Shape from './path/to/Shape';

<Shape
position={[
    point.dim1 * scaleX,
    point.dim2 * scaleY,
    point.dim3 * scaleZ,
]}
size={
      point.shape === "Cube"
        ? [
            point.size * 1.5,
            point.size * 1.5,
            point.size * 1.5,
          ]
        : point.shape === "Pyramid"
          ? [point.size, 2 * point.size, 4]
          : [point.size, 64, 32]
}
color={point.color}
label={point.label}
shape={point.shape}
id={point.filename}
showID={selection.has(point.filename)}
onClick={() => props.onSpecClick?.(point)}
isSelected={selection.has(point.filename)}
/>
```

## <a name="scene"></a> scene
The `Scene` component renders a 3D visualization of the provided spectrograms, allowing user interaction and selection. It manages the following:

1. **Canvas Setup**: Initializes a Three.js canvas with a specified camera position and event handling for selection clearing.
2. **Lighting**: Configures ambient and directional lighting in the scene.
3. **Rendering Spectrograms**: Based on the `renderMode`, it either renders the spectrograms as images using the `Spec` component or as shapes using the `Shape` component.
4. **Selection Handling**: Allows multiple spectrograms to be selected through mouse interactions when displayed as shapes.
5. **Camera Controls**: Implements orbit controls to navigate around the scene.

#### Spectrogram Type
```typescript
export type Spectrogram = {
  filename: string
  dim1: number
  dim2: number
  dim3: number
  radius: number
  color: string
  width: number
  height: number
  label: string
  flocation: string
  shape: string
}
```

- **filename**: The name of the spectrogram file.
- **dim1**, **dim2**, **dim3**: Spatial dimensions of the spectrogram used for positioning in 3D space.
- **radius**: The radius of the sphere representation (if applicable).
- **color**: The color of the spectrogram, specified as a hex code or English color name.
- **width**, **height**: Dimensions for rendering the image.
- **label**: A descriptive label for the spectrogram.
- **flocation**: A fake location made up for the spectrogram data.
- **shape**: The shape of the spectrogram

#### SceneProps

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
  renderDotSize?: SphereProps["size"]
  dotColor?: SphereProps["color"]
  onSpecClick?: (point: Spectrogram) => void
  renderMode: "image" | "dot"
}
```

- **spectrograms**: An array of `Spectrogram` objects to be rendered in the scene.
- **camera**: Optional camera settings including the position in 3D space.
- **controls**: Optional camera control settings to constrain camera movement.
- **light**: Optional lighting settings including the position of directional light.
- **renderDotSize**: Size of the rendered spheres (if using dot mode).
- **dotColor**: Color of the rendered spheres (if using dot mode).
- **onSpecClick**: Callback function triggered when a spectrogram is clicked.
- **renderMode**: Determines how the spectrograms are rendered - as "image" or "dot".

#### Usage Example
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

## <a name="interface"></a> interface
The `Interface` component utilizes Material-UI (MUI) to provide a user interface for adjusting scale values along three axes (x, y, and z). It integrates with the `Configurator` context to manage the scale states.

#### Usage
To use the `Interface` component, simply import it and include it in your component tree. You can also pass additional styles via the `sx` prop if needed.

```javascript
import Interface from './path/to/Interface';

<Interface sx={{ customStyle }} />
```

<small>[back to top](#top)</small>

# <a name="contexts"></a> contexts

## <a name="user-data"></a> user-data
This module provides a context for managing `Spectrogram` objects in a React application. It includes a context provider that allows components to access and update spectrogram data efficiently.

See `example-shape-visualization` for how it's implemented.
<details> 
<summary>More details</summary>

#### `SpecState`
```typescript
type SpecState = Map<Spectrogram["filename"], Spectrogram>
```
A map of spectrogram filenames to their corresponding `Spectrogram` objects.

#### `Updater`
```typescript
type Updater = (spectrogram: Spectrogram) => Spectrogram
```
A function that modifies and returns a `Spectrogram`.

#### `Context`
```typescript
export type Context = {
  spectrograms: SpecState
  setSpectrograms: React.Dispatch<React.SetStateAction<SpecState>>
  updateSpectrogram: (id: Spectrogram["filename"], updateFn: Updater) => void
}
```
Contains:
- `spectrograms`: Current state of spectrograms.
- `setSpectrograms`: Function to update the state.
- `updateSpectrogram`: Function to update a specific spectrogram.

#### `Provider` Component
```typescript
export const Provider = (props: ProviderProps) => { ... }
```
Provides the `Context` to its children. Initializes state with optional initial `Spectrogram` data.

##### Example Usage
```jsx
<UserData.Provider data={initialData}>
  <YourComponent />
</UserData.Provider>
```

#### `useContext` Hook
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```
Custom hook to access the `Spectrogram` context.

##### Example Usage
```jsx
const { spectrograms, updateSpectrogram } = useContext();
```
</details>

## <a name="selection"></a> selection
This module provides a context for managing the selection of `Spectrogram` objects in a React application.

See `example-shape-visualization` for how it's implemented.

<details> 
<summary>More details</summary>

#### `Context`
```typescript
export type Context = {
  selection: Set<Spectrogram["filename"]>
  setSelection: (value: Set<Spectrogram["filename"]>) => void
  updateSelection: (value: Array<Spectrogram["filename"]>) => void
  clearSelection: () => void
}
```
Contains:
- `selection`: A `Set` containing the filenames of selected spectrograms.
- `setSelection`: Function to set the selection directly.
- `updateSelection`: Function to toggle the selection of multiple filenames.
- `clearSelection`: Function to clear all selections.

#### `Provider` Component
```typescript
export const Provider = (props: ProviderProps) => { ... }
```
This provides the `Context` to its children. It initializes the selection state with an empty `Set` and provides methods to update and clear selections.

##### Example Usage
```jsx
<Selection.Provider>
  <YourComponent />
</Selection.Provider>
```

#### `useContext` Hook
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```
A custom hook to access the selection context within functional components.

##### Example Usage
```jsx
const { selection, updateSelection, clearSelection } = useContext();
```
</details>

## <a name="focus"></a> focus
This module provides a context for managing focus on `Spectrogram` objects in a React application.

See `example-spec-visualization` for how it's implemented.

<details> 
<summary>More details</summary>

#### `Context`
```typescript
export type Context = {
  hasFocus: boolean
  focusedItem: Spectrogram | null
  setFocusedItem: (point: Spectrogram | null) => void
  unsetFocus: () => void
}
```
Contains:
- `hasFocus`: A boolean indicating if an item is currently focused.
- `focusedItem`: The currently focused `Spectrogram` object or `null`.
- `setFocusedItem`: Function to set the currently focused item.
- `unsetFocus`: Function to clear the focus.

#### `Provider` Component
```typescript
export const Provider = (props: ProviderProps) => { ... }
```
This manages the state of the focused item and provides methods to set and unset focus.

##### Example Usage
```jsx
<Focus.Provider>
  <YourComponent />
</Focus.Provider>
```

#### `useContext` Hook
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```
A custom hook to access the focus context within functional components.

##### Example Usage
```jsx
const { hasFocus, focusedItem, setFocusedItem, unsetFocus } = useContext();
```
</details>

## <a name="configurator"></a> configurator
This module provides a context for adjusting the axes position in a React application.

See `example-spec-visualization` for how it's implemented.

<details> 
<summary>More details</summary>

#### `RenderMode`
```typescript
export enum RenderMode {
  image = 0,
  dot = 1,
}
```
An enumeration that defines the rendering modes:
- `image`: Renders as an image.
- `dot`: Renders as dots.

This allows for a feature where the user can toggle between a shape visualisation or a spectrogram image visualisation on the UI in a single demo.

#### `Context`
```typescript
export type Context = {
  renderMode: RenderMode
  scaleX: number
  scaleY: number
  scaleZ: number
  setRenderMode: (value: RenderMode) => void
  setScaleX: (value: number) => void
  setScaleY: (value: number) => void
  setScaleZ: (value: number) => void
}
```
Contains:
- `renderMode`: Current rendering mode.
- `scaleX`: Scale factor along the X-axis.
- `scaleY`: Scale factor along the Y-axis.
- `scaleZ`: Scale factor along the Z-axis.
- `setRenderMode`: Function to set the rendering mode.
- `setScaleX`: Function to set the X-axis scale.
- `setScaleY`: Function to set the Y-axis scale.
- `setScaleZ`: Function to set the Z-axis scale.


#### `Provider` Component
```typescript
export const Provider = (props: ProviderProps) => { ... }
```
It manages rendering mode and scaling factors. It also validates rendering mode using `Util.invariantEnum`.

##### Example Usage
```jsx
<Configurator.Provider>
  <YourComponent />
</Configurator.Provider>
```

#### `useContext` Hook
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```
A custom hook to access the configuration context within functional components.

##### Example Usage
```jsx
const { renderMode, setRenderMode, scaleX, setScaleX } = useContext();
```
</details>

## <a name="clickmode"></a> clickmode
This module provides a context for managing click modes in a React application. This allows for a feature that enables the user to choose between a detailed mode of selection or a single select mode.

<details> 
<summary>More details</summary>

#### `ClickMode`
```typescript
export enum ClickMode {
  detailed = "detailed",
  selection = "selection",
}
```
An enumeration that defines the available click modes:
- `detailed`: Enables detailed click interactions.
- `selection`: Enables selection-based click interactions.

#### `Context`
```typescript
export type Context = {
  clickMode: ClickMode
  setClickMode: (value: string) => void
}
```
Contains:
- `clickMode`: Current click mode.
- `setClickMode`: Function to set the click mode, validated against the `ClickMode` enum.

#### `Provider` Component
```typescript
export const Provider = (props: ProviderProps) => { ... }
```
It manages the current click mode as well as validates the click mode using `Util.invariantEnum`.

##### Example Usage
```jsx
<ClickMode.Provider>
  <YourComponent />
</ClickMode.Provider>
```

#### `useContext` Hook
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```
A custom hook to access the click mode context within functional components.

##### Example Usage
```jsx
const { clickMode, setClickMode } = useContext();
```
</details>

<small>[back to top](#top)</small>

## <a name="dev"></a> dev

See the [examples](#examples) section to start the development webserver.

Run linter and formatter.

```sh
> bun check
```

Run typescript compiler for all packages.

```sh
> bun tsc
```

<small>[back to top](#top)</small>

