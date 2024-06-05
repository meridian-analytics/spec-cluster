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
} from "spec-cluster"
import * as Z from "zod"
import FocusModal from "./FocusModal"
import data from "./data/small.json"

const Spectrogram = Z.object({
  filename: Z.string(),
  dim1: Z.coerce.number(),
  dim2: Z.coerce.number(),
  dim3: Z.coerce.number(),
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
    <Configurator.Provider>
      <Selection.Provider>
        <Focus.Provider>
          <ClickMode.Provider>
            <DemoScene />
            <Interface />
          </ClickMode.Provider>
        </Focus.Provider>
      </Selection.Provider>
    </Configurator.Provider>
  )
}

function DemoScene() {
  const { updateSelection } = Selection.useContext()
  const { setFocusedItem } = Focus.useContext()
  const { clickMode } = ClickMode.useContext()
  return (
    <>
      <FocusModal />
      <Scene
        spectrograms={parser(data)}
        controls={{
          minAzimuthAngle: -Math.PI / 4,
          maxAzimuthAngle: Math.PI / 4,
          minPolarAngle: Math.PI / 6,
          maxPolarAngle: Math.PI - Math.PI / 6,
          maxDistance: 120,
          minDistance: 5,
        }}
        renderDotSize={[0.3, 10, 10]}
        dotColor={"blue"}
        onSpecClick={point => {
          clickMode === ClickMode.ClickMode.detailed
            ? setFocusedItem(point)
            : updateSelection(point.filename)
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
