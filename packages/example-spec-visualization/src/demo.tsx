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
import type { Spectrogram } from "spec-cluster"
import * as Z from "zod"
import data from "../../data/small.json"
import FocusModal from "./FocusModal"

export type UserSpectrogram = Spectrogram<UserProperties>

export type UserProperties = {
  flocation: string
}

const JsonRow = Z.object({
  id: Z.string(),
  dim1: Z.coerce.number(),
  dim2: Z.coerce.number(),
  dim3: Z.coerce.number(),
  properties: Z.object({
    flocation: Z.string(),
  }).optional(),
}).transform(
  (row): UserSpectrogram => ({
    ...row,
    image: `${row.id}.png`,
    audio: `${row.id}.wav`,
    properties: row.properties ?? { flocation: "unknown" },
  }),
)

const JsonData = Z.array(JsonRow)

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
  const parsedData = React.useMemo(() => JsonData.parse(data), [])
  return (
    <UserData.Provider baseUrl={props.baseUrl} data={parsedData}>
      <Configurator.Provider>
        <Selection.Provider>
          <Focus.Provider>
            <FocusModal />
            <DemoScene />
            <Interface />
          </Focus.Provider>
        </Selection.Provider>
      </Configurator.Provider>
    </UserData.Provider>
  )
}

function DemoScene() {
  const focus = Focus.useContext()
  return (
    <Scene
      controls={{
        minAzimuthAngle: -Math.PI / 4,
        maxAzimuthAngle: Math.PI / 4,
        minPolarAngle: Math.PI / 6,
        maxPolarAngle: Math.PI - Math.PI / 6,
        maxDistance: 120,
        minDistance: 5,
      }}
      onSpecClick={point => {
        focus.setFocusedItem(point)
      }}
    />
  )
}
