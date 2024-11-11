---
sidebar_position: 2
title: Configurator
---
This module provides a context for adjusting the axes position and rendering mode in a React application. It allows users to dynamically change the rendering mode (image or dot) and scale factors for the X, Y, and Z axes.


### RenderMode Enum
```typescript
export enum RenderMode {
  image = 0,
  dot = 1,
}
```
An enumeration that defines the rendering modes:
- `image`: Renders as an image.
- `dot`: Renders as dots.

This enumeration provides a simple way to toggle between two different visualization modes in the UI. The RenderMode enum is typically used in scenarios where you want to provide users the ability to switch between different visual representations, such as viewing a Spectrogram as an image or as a scatter plot of points (dots).

### Context API
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


### Provider Component
The configurator provider component is responsible for managing the rendering mode and scaling factors in the context. It validates the rendering mode using the utility Util.invariantEnum, ensuring that only valid RenderMode values are used.
```typescript
export const Provider = (props: ProviderProps) => { ... }
```

#### Usage
Wrap the components where you want to access the configurator context with the configurator provider.
```jsx
<Configurator.Provider>
  <YourComponent />
</Configurator.Provider>
```

### useContext Hook
The useContext custom hook allows functional components to access and interact with the configurator context. 
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```

#### Usage
```jsx
const { renderMode, setRenderMode, scaleX, setScaleX } = useContext();
```