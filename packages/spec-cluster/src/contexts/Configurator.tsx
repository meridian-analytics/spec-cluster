import * as React from "react"
import * as Util from "spec-cluster-utils"
import { RenderMode } from "../components/Spectrogram"

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
  renderMode?: RenderMode
  scaleX?: number
  scaleY?: number
  scaleZ?: number
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
  const [renderMode, _setRenderMode] = React.useState(
    props.renderMode ?? defaultContext.renderMode,
  )
  const [scaleX, setScaleX] = React.useState(
    props.scaleX ?? defaultContext.scaleX,
  )
  const [scaleY, setScaleY] = React.useState(
    props.scaleY ?? defaultContext.scaleY,
  )
  const [scaleZ, setScaleZ] = React.useState(
    props.scaleZ ?? defaultContext.scaleZ,
  )
  const setRenderMode: Context["setRenderMode"] = React.useCallback(value => {
    Util.invariantEnum(value, RenderMode, "RenderMode")
    _setRenderMode(value)
  }, [])
  return (
    <Context.Provider
      children={props.children}
      value={{
        renderMode,
        setRenderMode,
        scaleX,
        setScaleX,
        scaleY,
        setScaleY,
        scaleZ,
        setScaleZ,
      }}
    />
  )
}

export const useContext = () => {
  return React.useContext(Context)
}
