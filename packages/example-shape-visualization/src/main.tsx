import * as React from "react"
import * as ReactDOM from "react-dom/client"
import * as Reb from "react-error-boundary"
import * as Demo from "./demo"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Reb.ErrorBoundary FallbackComponent={Demo.Fallback}>
      <Demo.DemoApp />
    </Reb.ErrorBoundary>
  </React.StrictMode>,
)
