import * as React from "react"

export type Context = {
  renderMode: number
  scaleX: number
  scaleY: number
  scaleZ: number
  setRenderMode: (value: number) => void
  setScaleX: (value: number) => void
  setScaleY: (value: number) => void
  setScaleZ: (value: number) => void
}

export type ProviderProps = {
  children: React.ReactNode
}

const defaultContext: Context = {
  renderMode: 0,
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
  const [renderMode, setRenderMode] = React.useState(0)
  const [scaleX, setScaleX] = React.useState(1)
  const [scaleY, setScaleY] = React.useState(1)
  const [scaleZ, setScaleZ] = React.useState(1)

  return (
    <Context.Provider
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
    >
      {props.children}
    </Context.Provider>
  )
}

export const useContext = () => {
  return React.useContext(Context)
}
