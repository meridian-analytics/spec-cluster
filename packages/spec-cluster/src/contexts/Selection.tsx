import * as React from "react"
import type { Spectrogram } from "../components/Scene"

export type Context = {
  selection: Set<Spectrogram["filename"]>
  setSelection: (value: Set<Spectrogram["filename"]>) => void
  updateSelection: (value: Spectrogram["filename"]) => void
}

export type ProviderProps = {
  children: React.ReactNode
}

const defaultContext: Context = {
  selection: new Set(),
  setSelection: () => {
    throw Error("setSelection called outside of context provider")
  },
  updateSelection: () => {
    throw Error("updateSelection called outside of context provider")
  },
}

const Context = React.createContext(defaultContext)

export const Provider = (props: ProviderProps) => {
  const [selection, setSelection] = React.useState(defaultContext.selection)
  const updateSelection: Context["updateSelection"] = filename => {
    const next = new Set(selection)
    if (next.has(filename)) next.delete(filename)
    else next.add(filename)
    setSelection(next)
  }
  return (
    <Context.Provider
      value={{
        selection,
        setSelection,
        updateSelection,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useContext = () => {
  return React.useContext(Context)
}
