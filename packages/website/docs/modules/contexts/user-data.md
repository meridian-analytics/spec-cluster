---
sidebar_position: 1
title: User Data
---
This module provides a context for managing `Spectrogram` objects in a React application. It includes a context provider that allows components to access and update spectrogram data efficiently.

See `example-shape-visualization` for how it's implemented.

### `SpecState`
```typescript
type SpecState = Map<Spectrogram["filename"], Spectrogram>
```
A map of spectrogram filenames to their corresponding `Spectrogram` objects.

### `Updater`
```typescript
type Updater = (spectrogram: Spectrogram) => Spectrogram
```
A function that modifies and returns a `Spectrogram`.

### `Context`
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

### `Provider` Component
```typescript
export const Provider = (props: ProviderProps) => { ... }
```
Provides the `Context` to its children. Initializes state with optional initial `Spectrogram` data.

### Example Usage
```jsx
<UserData.Provider data={initialData}>
  <YourComponent />
</UserData.Provider>
```

### `useContext` Hook
```typescript
export const useContext = () => {
  return React.useContext(Context)
}
```
Custom hook to access the `Spectrogram` context.

### Example Usage
```jsx
const { spectrograms, updateSpectrogram } = useContext();
```
