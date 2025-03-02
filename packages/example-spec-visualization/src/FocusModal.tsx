import * as M from "@mui/material"
import { Focus } from "spec-cluster"

export default function FocusModal({ baseUrl }: { baseUrl: string }) {
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
          src={`${baseUrl}/${focus.focusedItem.filename.replace(".wav", "")}.png`}
          style={{ maxWidth: "100%", maxHeight: "300px", margin: "16px 0" }}
        />
        <pre
          style={{
            backgroundColor: "#f4f4f4",
            padding: "16px",
            borderRadius: "4px",
          }}
        >
          {focus.focusedItem
            ? Object.entries(focus.focusedItem)
                .filter(([key]) =>
                  ["filename", "dim1", "dim2", "dim3"].includes(key),
                )
                .map(([key, value]) => `${key}: ${value ?? "N/A"}`)
                .join("\n")
            : "No data available"}
        </pre>
      </M.Box>
    </M.Modal>
  )
}
