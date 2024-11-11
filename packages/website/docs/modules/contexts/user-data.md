---
sidebar_position: 1
title: User Data
---
This module provides a context for managing `Spectrogram` objects in a React application. It includes a context provider and hooks that allow components to efficiently access and update spectrogram data.

### SpecState
```typescript
type SpecState = Map<Spectrogram["filename"], Spectrogram>
```
A map that associates each Spectrogram's filename with its corresponding `Spectrogram` object. The filename serves as a unique key for each spectrogram in the map, enabling quick access and updates.

### Updater
```typescript
type Updater = (spectrogram: Spectrogram) => Spectrogram
```
A function that takes a `Spectrogram` as an argument, modifies it, and returns the updated Spectrogram. This is used for applying transformations or updates to an individual spectrogram.

### Context API
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

### Provider Component
The provider component is responsible for managing the context state and making it available to the components that need access to the spectrogram data. It accepts an optional `initialData` prop to initialize the state.

```typescript
export const Provider = (props: ProviderProps) => { ... }
```

#### Usage
In this example, initialData is an optional prop that provides initial spectrogram data, which will be used to initialize the spectrograms state. Any component wrapped by the provider will have access to the context and can consume or modify the spectrogram state.

```jsx
<UserData.Provider data={initialData}>
  <YourComponent />
</UserData.Provider>
```

### useContext Hook
The useContext custom hook allows functional components to access and interact with the user data context. 
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```

#### Usage
```jsx
const { spectrograms, updateSpectrogram } = useContext();
```
