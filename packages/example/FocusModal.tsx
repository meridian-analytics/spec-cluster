import * as M from "@mui/material"
import { Focus } from "spec-cluster"

export default function FocusModal() {
  const { focusedItem, hasFocus, unsetFocus } = Focus.useContext()
  if (!focusedItem) {
    return null
  }
  //TODO need to define mui props similar to maipl.
  return (
    <M.Modal open={hasFocus} onClose={unsetFocus}>
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
          src={`/spectrogram_plots/${focusedItem.filename}_spectrogram.png`}
          style={{ maxWidth: "100%", maxHeight: "300px", margin: "16px 0" }}
        />
        <pre
          style={{
            backgroundColor: "#f4f4f4",
            padding: "16px",
            borderRadius: "4px",
          }}
        >
          {`filename: ${focusedItem.filename}
dim1: ${focusedItem.dim1}
dim2: ${focusedItem.dim2}
dim3: ${focusedItem.dim3}`}
        </pre>
      </M.Box>
    </M.Modal>
  )
}
