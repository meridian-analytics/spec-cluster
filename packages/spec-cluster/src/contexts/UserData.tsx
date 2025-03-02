import * as React from "react"
import type {
  Spectrogram,
  SpectrogramProperties,
} from "../components/Spectrogram"

type UpdaterFn<T = SpectrogramProperties> = (
  spectrogram: Spectrogram<T>,
) => Spectrogram<T>

export type Context<T = SpectrogramProperties> = {
  baseUrl: string
  spectrograms: Map<Spectrogram<T>["id"], Spectrogram<T>>
  setSpectrograms: React.Dispatch<React.SetStateAction<Context["spectrograms"]>>
  updateSpectrogram: (id: Spectrogram<T>["id"], updateFn: UpdaterFn<T>) => void
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
}

const Context = React.createContext(defaultContext)

export const Provider = (props: ProviderProps) => {
  const [spectrograms, setSpectrograms] = React.useState(
    new Map(props.data?.map(s => [s.id, s]) ?? defaultContext.spectrograms),
  )
  const updateSpectrogram: Context["updateSpectrogram"] = (id, updateFn) => {
    setSpectrograms(prevSpectrograms => {
      const updatedSpectrograms = new Map(prevSpectrograms)

      const prev = updatedSpectrograms.get(id)
      if (prev == null) {
        throw new Error(`updateSpectrogram could not find id: ${id}`)
      }

      updatedSpectrograms.set(id, updateFn(prev))

      return updatedSpectrograms
    })
  }
  return (
    <Context.Provider
      children={props.children}
      value={{
        baseUrl: props.baseUrl ?? defaultContext.baseUrl,
        spectrograms,
        setSpectrograms,
        updateSpectrogram,
      }}
    />
  )
}

export function useContext<T = SpectrogramProperties>() {
  return React.useContext(Context) as Context<T>
}
