import * as React from "react"
import type {
  Spectrogram,
  SpectrogramProperties,
} from "../components/Spectrogram"

export type Context<T = SpectrogramProperties> = {
  baseUrl: string
  spectrograms: Map<Spectrogram<T>["id"], Spectrogram<T>>
  setSpectrograms: React.Dispatch<React.SetStateAction<Context["spectrograms"]>>
  updateSpectrogram: (
    id: Spectrogram<T>["id"],
    updateFn: React.SetStateAction<Spectrogram<T>>,
  ) => void
  updateSpectrogramProperties: (
    id: Spectrogram<T>["id"],
    updateFn: React.SetStateAction<T>,
  ) => void
}

export type ProviderProps = {
  baseUrl?: string
  children: React.ReactNode
  data?: Array<Spectrogram>
}

const defaultContext: Context = {
  baseUrl: "",
  spectrograms: new Map(),
  setSpectrograms: () => {
    throw Error("setSpectrograms cannot be called out of context provider")
  },
  updateSpectrogram: () => {
    throw Error("updateSpectrogram cannot be called out of context provider")
  },
  updateSpectrogramProperties: () => {
    throw Error("updateProperties cannot be called out of context provider")
  },
}

const Context = React.createContext(defaultContext)

export const Provider = (props: ProviderProps) => {
  const [spectrograms, setSpectrograms] = React.useState(
    new Map(props.data?.map(s => [s.id, s]) ?? defaultContext.spectrograms),
  )
  const updateSpectrogram: Context["updateSpectrogram"] = React.useCallback(
    (id, updateFn) => {
      setSpectrograms(prev => {
        const spec = prev.get(id)
        if (spec == null) {
          console.error(Error(`updateSpectrogram could not find id: ${id}`))
          return prev
        }
        return new Map(prev).set(
          id,
          updateFn instanceof Function ? updateFn(spec) : updateFn,
        )
      })
    },
    [],
  )
  const updateSpectrogramProperties: Context["updateSpectrogramProperties"] =
    React.useCallback(
      (id, updateFn) => {
        updateSpectrogram(id, spec => ({
          ...spec,
          properties:
            updateFn instanceof Function ? updateFn(spec.properties) : updateFn,
        }))
      },
      [updateSpectrogram],
    )
  return (
    <Context.Provider
      children={props.children}
      value={{
        baseUrl: props.baseUrl ?? defaultContext.baseUrl,
        spectrograms,
        setSpectrograms,
        updateSpectrogram,
        updateSpectrogramProperties,
      }}
    />
  )
}

export function useContext<T = SpectrogramProperties>() {
  return React.useContext(Context) as Context<T>
}
