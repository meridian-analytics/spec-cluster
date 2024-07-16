import * as M from "@mui/material"
import { MuiColorInput } from "mui-color-input"
import { Selection, UserData } from "spec-cluster"

export default function MultiSelectEditor() {
  const { spectrograms, updateSpectrogram } = UserData.useContext()
  const { selection } = Selection.useContext()
  const selectedIds = Array.from(selection)

  // need to include this error
  // if (selectedIds.length != 1) {
  //   throw Error("MultiSelectEditor expects selection size of 1")
  // }
  const selectedId = selectedIds[0]
  const spectrogram = spectrograms.get(selectedId)

  if (spectrogram == null) {
    throw Error(
      `MultiSelectEditor could not find spectrogram by id: ${selectedId}`,
    )
  }

  function setRadius(newRadius: number) {
    for (const id of selectedIds) {
      updateSpectrogram(id, prev => ({ ...prev, radius: newRadius }))
    }
  }

  function setColor(newColor: string) {
    for (const id of selectedIds) {
      updateSpectrogram(id, prev => ({ ...prev, color: newColor }))
    }
  }

  function setWidth(newWidth: number) {
    for (const id of selectedIds) {
      updateSpectrogram(id, prev => ({ ...prev, width: newWidth }))
    }
  }
  function setHeight(newHeight: number) {
    for (const id of selectedIds) {
      updateSpectrogram(id, prev => ({ ...prev, height: newHeight }))
    }
  }
  function setLabel(newLabel: string) {
    for (const id of selectedIds) {
      updateSpectrogram(id, prev => ({ ...prev, label: newLabel }))
    }
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
          value={spectrogram.color}
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
            value={spectrogram.radius.toFixed(2)}
            onChange={e => setRadius(Number.parseFloat(e.target.value))}
          />
          <M.TextField
            id="standard-basic"
            label="Height"
            type="number"
            variant="standard"
            sx={{ color: "white" }}
            value={spectrogram.height.toFixed(2)}
            onChange={e => setHeight(Number.parseFloat(e.target.value))}
          />
          <M.TextField
            id="standard-basic"
            label="Width"
            type="number"
            variant="standard"
            sx={{ color: "white" }}
            value={spectrogram.width.toFixed(2)}
            onChange={e => setWidth(Number.parseFloat(e.target.value))}
          />
        </div>
      </M.FormControl>
    </M.Stack>
  )
}
