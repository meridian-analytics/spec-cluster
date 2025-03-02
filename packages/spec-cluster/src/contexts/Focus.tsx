import * as React from "react"
import type { Spectrogram } from "../components/Scene"

export type Context = {
  focusedItem: Spectrogram | null
  setFocusedItem: (point: Spectrogram | null) => void
  unsetFocus: () => void
}

export type ProviderProps = {
  children: React.ReactNode
}

const defaultContext: Context = {
  focusedItem: null,
  setFocusedItem: () => {
    throw Error("setFocusedItem called outside of context provider")
  },
  unsetFocus: () => {
    throw Error("unsetFocus called outside of context provider")
  },
}

const Context = React.createContext(defaultContext)

export const Provider = (props: ProviderProps) => {
  const [focusedItem, setFocusedItem] = React.useState(
    defaultContext.focusedItem,
  )
  const unsetFocus: Context["unsetFocus"] = () => {
    setFocusedItem(null)
  }
  return (
    <Context.Provider
      children={props.children}
      value={{
        focusedItem,
        setFocusedItem,
        unsetFocus,
      }}
    />
  )
}

export const useContext = () => {
  return React.useContext(Context)
}
