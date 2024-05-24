import * as M from "@mui/material"
import { Focus } from "spec-cluster"

export default function FocusModal() {
  const { focusedItem, hasFocus, unsetFocus } = Focus.useContext()
  return (
    <M.Modal open={hasFocus} onClose={unsetFocus}>
      <pre>{JSON.stringify(focusedItem, null, 2)}</pre>
    </M.Modal>
  )
}
