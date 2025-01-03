import * as React from "react"
import type { Spectrogram } from "../components/Scene"

type SpecState = Map<Spectrogram["filename"], Spectrogram>
type Updater = (spectrogram: Spectrogram) => Spectrogram

export type Context = {
  spectrograms: SpecState
  setSpectrograms: React.Dispatch<React.SetStateAction<SpecState>>
  updateSpectrogram: (id: Spectrogram["filename"], updateFn: Updater) => void
}

export type ProviderProps = {
  children: React.ReactNode
  data?: Array<Spectrogram>
}

const defaultContext: Context = {
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
    new Map(
      props.data?.map(s => [s.filename, s]) ?? defaultContext.spectrograms,
    ),
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
      value={{
        spectrograms,
        setSpectrograms,
        updateSpectrogram,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useContext = () => {
  return React.useContext(Context)
}
