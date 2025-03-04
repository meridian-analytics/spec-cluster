import * as React from "react"
import type { Spectrogram } from "../components/Spectrogram"

export type Context = {
  selection: Set<Spectrogram["id"]>
  setSelection: (value: Set<Spectrogram["id"]>) => void
  updateSelection: (value: Array<Spectrogram["id"]>) => void
  clearSelection: () => void
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
  clearSelection: () => {
    throw Error("clearSelection called outside of context provider")
  },
}

const Context = React.createContext(defaultContext)

export const Provider = (props: ProviderProps) => {
  const [selection, setSelection] = React.useState(defaultContext.selection)
  const updateSelection: Context["updateSelection"] = filenames => {
    const next = new Set(selection)
    for (const filename of filenames) {
      if (next.has(filename)) next.delete(filename)
      else next.add(filename)
    }
    setSelection(next)
  }
  const clearSelection: Context["clearSelection"] = () => {
    setSelection(new Set())
  }

  return (
    <Context.Provider
      value={{
        selection,
        setSelection,
        updateSelection,
        clearSelection,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useContext = () => {
  return React.useContext(Context)
}
