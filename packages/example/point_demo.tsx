import * as React from "react"
import * as ReactDOM from "react-dom/client"
import * as Reb from "react-error-boundary"
import {
  Configurator,
  Focus,
  Interface,
  Scene,
  Selection,
  ClickMode,
  UserData,
} from "spec-cluster"
import * as Z from "zod"
import FocusModal from "./FocusModal"
import data from "./data/small.json"
import SingleSelectEditor from "./SingleSelectEditor"
import MultiSelectEditor from "./MultiSelectEditor"

const Spectrogram = Z.object({
  filename: Z.string(),
  dim1: Z.coerce.number(),
  dim2: Z.coerce.number(),
  dim3: Z.coerce.number(),
  radius: Z.number().optional().default(0.9),
  color: Z.string().optional().default("blue"),
  width: Z.number().optional().default(3),
  height: Z.number().optional().default(3),
  label: Z.string().optional().default(""),
})

function parser(value: unknown) {
  const result = Z.array(Spectrogram).safeParse(value)
  if (result.success) return result.data
  throw new Error(result.error.message)
}

function Fallback(props: Reb.FallbackProps) {
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

function DemoApp() {
  return (
    <UserData.Provider data={parser(data)}>
      <Configurator.Provider>
        <Selection.Provider>
          {/* <Focus.Provider> */}
          <ClickMode.Provider>
            <DemoScene />
            <Interface />
          </ClickMode.Provider>
          {/* </Focus.Provider> */}
        </Selection.Provider>
      </Configurator.Provider>
    </UserData.Provider>
  )
}

function DemoScene() {
  const { spectrograms } = UserData.useContext()
  const { selection, updateSelection } = Selection.useContext()
  //   const { setFocusedItem } = Focus.useContext()
  //   const { clickMode } = ClickMode.useContext()
  return (
    <>
      <FocusModal />
      {/* {selection.size == 1 && <SingleSelectEditor />} */}
      {selection.size >= 1 && <MultiSelectEditor />}
      <Scene
        spectrograms={Array.from(spectrograms.values())}
        controls={{
          minAzimuthAngle: -Math.PI / 4,
          maxAzimuthAngle: Math.PI / 4,
          minPolarAngle: Math.PI / 6,
          maxPolarAngle: Math.PI - Math.PI / 6,
          maxDistance: 120,
          minDistance: 5,
        }}
        onSpecClick={point => {
          updateSelection([point.filename])
        }}
      />
    </>
  )
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Reb.ErrorBoundary FallbackComponent={Fallback}>
      <DemoApp />
    </Reb.ErrorBoundary>
  </React.StrictMode>,
)