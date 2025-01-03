import * as React from "react"
import type * as Reb from "react-error-boundary"
import {
  Configurator,
  Focus,
  Interface,
  Scene,
  Selection,
  UserData,
} from "spec-cluster"
import * as Z from "zod"
import FocusModal from "./FocusModal"
import data from "../../data/small.json"

const Spectrogram = Z.object({
  filename: Z.string(),
  dim1: Z.coerce.number(),
  dim2: Z.coerce.number(),
  dim3: Z.coerce.number(),
  size: Z.number().optional().default(0.9),
  color: Z.string().optional().default("Blue"),
  width: Z.number().optional().default(5),
  height: Z.number().optional().default(5),
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

type SpecDemoAppProps = {
  baseUrl?: string
}

export function SpecDemoApp(props: SpecDemoAppProps) {
  return (
    <UserData.Provider data={parser(data)}>
      <Configurator.Provider>
        <Selection.Provider>
          <Focus.Provider>
            <DemoScene baseUrl={props.baseUrl} />
            <Interface />
          </Focus.Provider>
        </Selection.Provider>
      </Configurator.Provider>
    </UserData.Provider>
  )
}

function DemoScene(props: SpecDemoAppProps) {
  const { spectrograms } = UserData.useContext()
  const { setFocusedItem } = Focus.useContext()
  return (
    <>
      <FocusModal baseUrl={props.baseUrl ?? ""} />
      <Scene
        renderMode="image"
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
          setFocusedItem(point)
        }}
        baseUrl={props.baseUrl}
      />
    </>
  )
}
