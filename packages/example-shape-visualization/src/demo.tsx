import * as React from "react"
import * as ReactDOM from "react-dom/client"
import type * as Reb from "react-error-boundary"
import {
  Configurator,
  Interface,
  Scene,
  Selection,
  ClickMode,
  UserData,
} from "spec-cluster"
import * as Z from "zod"
import data from "../../data/small.json"
import MultiSelectEditor from "./MultiSelectEditor"
import TableView from "./TableView"

const Spectrogram = Z.object({
  filename: Z.string(),
  dim1: Z.coerce.number(),
  dim2: Z.coerce.number(),
  dim3: Z.coerce.number(),
  size: Z.number().optional().default(0.9),
  color: Z.string().optional().default("Blue"),
  width: Z.number().optional().default(3),
  height: Z.number().optional().default(3),
  label: Z.string().optional().default(""),
  flocation: Z.string(),
  shape: Z.string().optional().default("Sphere"),
})

function parser(value: unknown) {
  const result = Z.array(Spectrogram).safeParse(value)
  if (result.success) return result.data
  throw new Error(result.error.message)
}

export function Fallback(props: Reb.FallbackProps) {
  React.useEffect(() => {
    console.error(props.error)
  }, [props.error])
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{props.error.message}</pre>
      <button
        type="button"
        onClick={props.resetErrorBoundary}
        children="Try again"
      />
    </div>
  )
}

export function DemoApp() {
  return (
    <UserData.Provider data={parser(data)}>
      <Configurator.Provider>
        <Selection.Provider>
          <ClickMode.Provider>
            <DemoScene />
            <Interface />
          </ClickMode.Provider>
        </Selection.Provider>
      </Configurator.Provider>
    </UserData.Provider>
  )
}

function DemoScene() {
  const { spectrograms } = UserData.useContext()
  const { selection} = Selection.useContext()
  return (
    <>
      <TableView />
      {selection.size >= 1 && <MultiSelectEditor />}
      <Scene
        renderMode="dot"
        spectrograms={Array.from(spectrograms.values())}
        controls={{
          minAzimuthAngle: -Math.PI / 4,
          maxAzimuthAngle: Math.PI / 4,
          minPolarAngle: Math.PI / 6,
          maxPolarAngle: Math.PI - Math.PI / 6,
          maxDistance: 120,
          minDistance: 5,
        }}
      />
    </>
  )
}
