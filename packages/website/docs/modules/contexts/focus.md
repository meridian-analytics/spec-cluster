---
sidebar_position: 4
title: Focus
---
This module provides a context for managing focus on `Spectrogram` objects in a React application. It simplifies the process of tracking which item is currently focused, and allows components to easily set or unset focus as needed.


### Context API
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
- `focusedItem`: The currently focused Spectrogram object or null.
- `setFocusedItem`: Function to set the currently focused item.
- `unsetFocus`: Function to clear the focus.

### Provider Component
The provider component wraps your application or part of it and manages the state for the focus context. It provides the necessary context values to all child components.
```typescript
export const Provider = (props: ProviderProps) => { ... }
```

#### Usage
Wrap the components where you want to access the focus context with the focus provider.

```jsx
<Focus.Provider>
  <YourComponent />
</Focus.Provider>
```

### useContext Hook
The useContext custom hook allows functional components to access and interact with the focus context. 
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```

#### Usage
```jsx
const { hasFocus, focusedItem, setFocusedItem, unsetFocus } = useContext();
```
