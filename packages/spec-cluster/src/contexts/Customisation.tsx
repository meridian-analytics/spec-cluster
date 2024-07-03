import * as React from "react"
import { Color } from "three"

export type Context = {
  color: string
  radius: number
  height: number
  width: number
  label: string
  setRadius: (value: number) => void
  setHeight: (value: number) => void
  setWidth: (value: number) => void
  setLabel: (value: string) => void
  setColor: (value: string) => void
}

export type ProviderProps = {
  children: React.ReactNode
}

const defaultContext: Context = {
  color: "blue",
  radius: 0.3,
  height: 10,
  width: 10,
  label: "",
  setRadius: () => {
    throw Error("setRadius called outside of context provider")
  },
  setHeight: () => {
    throw Error("setHeight called outside of context provider")
  },
  setWidth: () => {
    throw Error("setWidth called outside of context provider")
  },
  setLabel: () => {
    throw Error("setLabel called outside of context provider")
  },
  setColor: () => {
    throw Error("setColor called outside of context provider")
  },
}

const Context = React.createContext(defaultContext)

export const Provider = (props: ProviderProps) => {
  const [color, setColor] = React.useState(defaultContext.color)
  const [height, setHeight] = React.useState(defaultContext.height)
  const [width, setWidth] = React.useState(defaultContext.width)
  const [label, setLabel] = React.useState(defaultContext.label)
  const [radius, setRadius] = React.useState(defaultContext.radius)

  return (
    <Context.Provider
      value={{
        color,
        radius,
        height,
        width,
        label,
        setHeight,
        setColor,
        setLabel,
        setWidth,
        setRadius,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useContext = () => {
  return React.useContext(Context)
}
