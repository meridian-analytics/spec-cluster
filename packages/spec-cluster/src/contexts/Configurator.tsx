import * as React from "react"
import * as Util from "#util"

export enum RenderMode {
  image = 0,
  dot = 1,
}

export type Context = {
  renderMode: RenderMode
  scaleX: number
  scaleY: number
  scaleZ: number
  setRenderMode: (value: RenderMode) => void
  setScaleX: (value: number) => void
  setScaleY: (value: number) => void
  setScaleZ: (value: number) => void
}

export type ProviderProps = {
  children: React.ReactNode
}

const defaultContext: Context = {
  renderMode: RenderMode.image,
  scaleX: 1,
  scaleY: 1,
  scaleZ: 1,
  setRenderMode: () => {
    throw Error("setRenderMode called outside of context provider")
  },
  setScaleX: () => {
    throw Error("setScaleX called outside of context provider")
  },
  setScaleY: () => {
    throw Error("setScaleY called outside of context provider")
  },
  setScaleZ: () => {
    throw Error("setScaleZ called outside of context provider")
  },
}

const Context = React.createContext(defaultContext)

export const Provider = (props: ProviderProps) => {
  const [renderMode, setRenderMode] = React.useState(defaultContext.renderMode)
  const [scaleX, setScaleX] = React.useState(defaultContext.scaleX)
  const [scaleY, setScaleY] = React.useState(defaultContext.scaleY)
  const [scaleZ, setScaleZ] = React.useState(defaultContext.scaleZ)

  return (
    <Context.Provider
      value={{
        renderMode,
        setRenderMode: (value: number) => {
          Util.invariantEnum(value, RenderMode, "RenderMode")
          setRenderMode(value)
        },
        scaleX,
        setScaleX,
        scaleY,
        setScaleY,
        scaleZ,
        setScaleZ,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useContext = () => {
  return React.useContext(Context)
}
