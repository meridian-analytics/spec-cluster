# <a name="top"></a> spec-cluster

* [components](#components)
    * [spec](#spec)
    * [sphere](#sphere)
    * [scene](#scene)
    * [interface](#interface)
* [contexts](#contexts)
    * [user-data](#user-data)
    * [selection](#selection)
    * [focus](#focus)
    * [configurator](#configurator)
    * [clickmode](#clickmode)
* [dev](#dev)

## <a name="components"></a> components
Most components within the `spec-cluster` package are built using `@react-three/fiber` and `@react-three/drei`, which are popular libraries for integrating `Three.js` with React. Having a basic understanding of `Three.js` will greatly enhance your experience with `spec-cluster` and help you navigate its 3D visualization capabilities more effectively.

For more information on these libraries, refer to the [React Three Fiber Docs](https://r3f.docs.pmnd.rs/getting-started/introduction)
### <a name="spec"></a> spec
### <a name="sphere"></a> sphere
The `Sphere` component is responsible for rendering individual spheres in the 3D space and is utilized by the `Scene` component.
### <a name="scene"></a> scene
### <a name="interface"></a> interface

<small>[back to top](#top)</small>

## <a name="contexts"></a> contexts
### <a name="user-data"></a> user-data
This module provides a context for managing `Spectrogram` objects in a React application. It includes a context provider that allows components to access and update spectrogram data efficiently.

See `example-point-visualization` for how it's implemented.
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

### <a name="selection"></a> selection
This module provides a context for managing the selection of `Spectrogram` objects in a React application.

See `example-point-visualization` for how it's implemented.

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

### <a name="focus"></a> focus
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

### <a name="configurator"></a> configurator
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

This allows for a feature where the user can toggle between a point visualisation or a spectrogram image visualisation on the UI in a single demo.

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

### <a name="clickmode"></a> clickmode
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

