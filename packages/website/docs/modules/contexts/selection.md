---
sidebar_position: 3
title: Selection
---
This module provides a context for managing the selection of `Spectrogram` objects in a React application. It enables components to track and manipulate a set of selected Spectrogram items based on their filenames, offering flexibility in handling bulk selections and updates.

### Context API
```typescript
export type Context = {
  selection: Set<Spectrogram["filename"]>
  setSelection: (value: Set<Spectrogram["filename"]>) => void
  updateSelection: (value: Array<Spectrogram["filename"]>) => void
  clearSelection: () => void
}
```
Contains:
- `selection`: A set containing the filenames of selected spectrograms.
- `setSelection`: Function to set the selection directly.
- `updateSelection`: Function to toggle the selection of multiple filenames.
- `clearSelection`: Function to clear all selections.

### Provider Component
This provides the context to its children. It initializes the selection state with an empty set and provides methods to update and clear selections.

```typescript
export const Provider = (props: ProviderProps) => { ... }
```

#### Usage
Wrap the components where you want to access the selection context with the selection provider.
```jsx
<Selection.Provider>
  <YourComponent />
</Selection.Provider>
```

### useContext Hook
The useContext custom hook allows functional components to access and interact with the selection context. 
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```

#### Usage
```jsx
const { selection, updateSelection, clearSelection } = useContext();
```
