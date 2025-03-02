import * as M from "@mui/material"
import { MuiColorInput } from "mui-color-input"
import { Selection, UserData } from "spec-cluster"

export default function SingleSelectEditor() {
  const userData = UserData.useContext()
  const selection = Selection.useContext()
  const selectedIds = Array.from(selection.selection)

  if (selectedIds.length != 1) {
    throw Error("SingleSelectEditor expects selection size of 1")
  }

  const selectedId = selectedIds[0]
  const spectrogram = userData.spectrograms.get(selectedId)

  if (spectrogram == null) {
    throw Error(
      `SingleSelectEditor could not find spectrogram by id: ${selectedId}`,
    )
  }

  function setSize(newSize: string) {
    const num = Number.parseFloat(newSize)
    if (Number.isNaN(num)) return
    userData.updateSpectrogram(selectedId, prev => {
      return { ...prev, size: num }
    })
  }

  function setColor(newColor: string) {
    userData.updateSpectrogram(selectedId, prev => {
      return { ...prev, color: newColor }
    })
  }

  function setWidth(newWidth: string) {
    const num = Number.parseFloat(newWidth)
    if (Number.isNaN(num)) return
    userData.updateSpectrogram(selectedId, prev => {
      return { ...prev, width: num }
    })
  }
  function setHeight(newHeight: string) {
    const num = Number.parseFloat(newHeight)
    if (Number.isNaN(num)) return
    userData.updateSpectrogram(selectedId, prev => {
      return { ...prev, height: num }
    })
  }
  function setLabel(newLabel: string) {
    userData.updateSpectrogram(selectedId, prev => {
      return { ...prev, label: newLabel }
    })
  }

  return (
    <M.Stack
      sx={{
        position: "absolute",
        top: "20px",
        left: 0,
        width: 250,
        bgcolor: "lightblue",
        color: "white",
        borderRadius: 2,
        p: 3,
        margin: 2,
        zIndex: 1000,
      }}
    >
      <M.FormControl>
        <M.FormLabel sx={{ color: "white" }}>Editor</M.FormLabel>
        <MuiColorInput
          format="hex"
          value={spectrogram.color ?? "blue"}
          onChange={setColor}
          sx={{ marginTop: 1 }}
        />
        <M.TextField
          id="standard-basic"
          label="Label"
          variant="standard"
          sx={{ color: "white" }}
          value={spectrogram.label}
          onChange={e => setLabel(e.target.value)}
        />
      </M.FormControl>
      <M.FormControl>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 7,
          }}
        >
          <M.TextField
            id="standard-basic"
            label="Radius"
            type="number"
            variant="standard"
            sx={{ color: "white" }}
            value={(spectrogram.size ?? 0.9).toFixed(2)}
            onChange={e => setSize(e.target.value)}
          />
          <M.TextField
            id="standard-basic"
            label="Height"
            type="number"
            variant="standard"
            sx={{ color: "white" }}
            value={(spectrogram.height ?? 5).toFixed(2)}
            onChange={e => setHeight(e.target.value)}
          />
          <M.TextField
            id="standard-basic"
            label="Width"
            type="number"
            variant="standard"
            sx={{ color: "white" }}
            value={(spectrogram.width ?? 5).toFixed(2)}
            onChange={e => setWidth(e.target.value)}
          />
        </div>
      </M.FormControl>
    </M.Stack>
  )
}
