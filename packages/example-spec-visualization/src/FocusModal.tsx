import * as M from "@mui/material"
import { Focus } from "spec-cluster"
import { UserData } from "spec-cluster"
import type { UserProperties } from "./demo"

export default function FocusModal() {
  const userData = UserData.useContext()
  const focus = Focus.useContext()
  if (focus.focusedItem == null) {
    return null
  }
  //TODO need to define mui props similar to maipl.
  return (
    <M.Modal open={true} onClose={focus.unsetFocus}>
      <M.Box
        component={"div"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: M.colors.grey[50],
          border: "1px solid #000",
          borderRadius: "2px",
          boxShadow: 24,
          p: 4,
          overflow: "hidden",
        }}
      >
        <M.Typography variant="h6" component="h2" fontWeight={"bold"}>
          Spectrogram Details
        </M.Typography>
        <img
          alt={"spectrogram"}
          src={`${userData.baseUrl}/${focus.focusedItem.image}`}
          style={{ maxWidth: "100%", maxHeight: "300px", margin: "16px 0" }}
        />
        <FocusDetails />
      </M.Box>
    </M.Modal>
  )
}

function FocusDetails() {
  const focus = Focus.useContext<UserProperties>()
  const spec = focus.focusedItem
  if (spec == null) return "No data available"
  return (
    <pre
      children={[
        `id: ${spec.id}`,
        `image: ${spec.image}`,
        `audio: ${spec.audio ?? "none"}`,
        `dim1: ${spec.dim1}`,
        `dim2: ${spec.dim2}`,
        `dim3: ${spec.dim3}`,
        `flocation: ${spec.properties?.flocation ?? "unknown"}`,
      ].join("\n")}
      style={{
        backgroundColor: "#f4f4f4",
        padding: "16px",
        borderRadius: "4px",
      }}
    />
  )
}
