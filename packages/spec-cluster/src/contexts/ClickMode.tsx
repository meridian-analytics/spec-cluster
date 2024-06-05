import * as React from "react"
import * as Util from "#util"

export enum ClickMode {
  detailed = "detailed",
  selection = "selection",
}
export type Context = {
  clickMode: ClickMode
  setClickMode: (value: string) => void
}

export type ProviderProps = {
  children: React.ReactNode
}

const defaultContext: Context = {
  clickMode: ClickMode.detailed,
  setClickMode: () => {
    throw new Error("setClickMode called outside of context provider")
  },
}

const Context = React.createContext(defaultContext)

export const Provider = (props: ProviderProps) => {
  const [clickMode, setClickMode] = React.useState(defaultContext.clickMode)

  return (
    <Context.Provider
      value={{
        clickMode,
        setClickMode: (value: string) => {
          Util.invariantEnum(value, ClickMode, "ClickMode")
          setClickMode(value)
        },
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useContext = () => {
  return React.useContext(Context)
}
