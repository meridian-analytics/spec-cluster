---
sidebar_position: 3
title: Selection
---
This module provides a context for managing the selection of `Spectrogram` objects in a React application.

See `example-shape-visualization` for how it's implemented.

### `Context`
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

### `Provider` Component
```typescript
export const Provider = (props: ProviderProps) => { ... }
```
This provides the `Context` to its children. It initializes the selection state with an empty `Set` and provides methods to update and clear selections.

### Example Usage
```jsx
<Selection.Provider>
  <YourComponent />
</Selection.Provider>
```

### `useContext` Hook
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```
A custom hook to access the selection context within functional components.

### Example Usage
```jsx
const { selection, updateSelection, clearSelection } = useContext();
```
