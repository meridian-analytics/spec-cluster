import * as M from "@mui/material"
import { Selection, ShapeType, UserData } from "spec-cluster"
import * as Util from "spec-cluster-utils"

export default function MultiSelectEditor() {
  const userData = UserData.useContext()
  const selection = Selection.useContext()
  const selectedIds = Array.from(selection.selection)
  const selectedId = selectedIds[0]
  const spectrogram = userData.spectrograms.get(selectedId)

  if (spectrogram == null) {
    throw Error(
      `MultiSelectEditor could not find spectrogram by id: ${selectedId}`,
    )
  }

  function setSize(newSize: number) {
    for (const id of selectedIds) {
      userData.updateSpectrogram(id, prev => ({
        ...prev,
        size: newSize,
      }))
    }
  }

  function setColor(newColor: string) {
    for (const id of selectedIds) {
      userData.updateSpectrogram(id, prev => ({
        ...prev,
        color: newColor,
      }))
    }
  }

  function setWidth(newWidth: number) {
    for (const id of selectedIds) {
      userData.updateSpectrogram(id, prev => ({
        ...prev,
        width: newWidth,
      }))
    }
  }
  function setHeight(newHeight: number) {
    for (const id of selectedIds) {
      userData.updateSpectrogram(id, prev => ({
        ...prev,
        height: newHeight,
      }))
    }
  }
  function setLabel(newLabel: string) {
    for (const id of selectedIds) {
      userData.updateSpectrogram(id, prev => ({
        ...prev,
        label: newLabel,
      }))
    }
  }
  function setShape(newShape: string) {
    Util.invariantEnum(newShape, ShapeType, "ShapeType")
    for (const id of selectedIds) {
      userData.updateSpectrogram(id, prev => ({
        ...prev,
        shape: newShape,
      }))
    }
  }

  return (
    <M.Stack
      sx={{
        position: "absolute",
        top: "55%",
        right: 0,
        transform: "translateY(-50%)",
        width: 250,
        bgcolor: M.colors.grey[300],
        color: "white",
        borderRadius: 2,
        p: 3,
        margin: 2,
        zIndex: 10,
      }}
    >
      <M.FormLabel sx={{ color: "Black" }}>Editor</M.FormLabel>
      <M.FormControl fullWidth sx={{ marginTop: 2 }}>
        <M.InputLabel>Color</M.InputLabel>
        <M.Select
          value={spectrogram.color}
          label="Color"
          onChange={e => setColor(e.target.value)}
        >
          <M.MenuItem value={"blue"}>Blue (default) </M.MenuItem>
          <M.MenuItem value={"green"}>Green</M.MenuItem>
          <M.MenuItem value={"red"}>Red</M.MenuItem>
          <M.MenuItem value={"yellow"}>Yellow</M.MenuItem>
          <M.MenuItem value={"brown"}>Brown</M.MenuItem>
        </M.Select>
        <M.TextField
          id="standard-basic"
          label="Label"
          variant="standard"
          value={spectrogram.label}
          onChange={e => setLabel(e.target.value)}
        />
      </M.FormControl>
      <M.FormControl>
        <M.TextField
          id="standard-basic"
          label="Size"
          type="number"
          variant="standard"
          sx={{ color: "white", marginTop: 2 }}
          value={(spectrogram.size ?? 0.9).toFixed(2)}
          onChange={e => setSize(Number.parseFloat(e.target.value))}
        />
      </M.FormControl>
      <M.FormControl fullWidth sx={{ marginTop: 2 }}>
        <M.InputLabel>Shape</M.InputLabel>
        <M.Select
          value={spectrogram.shape}
          label="Shape"
          onChange={e => setShape(e.target.value)}
        >
          <M.MenuItem value={ShapeType.sphere}>Sphere</M.MenuItem>
          <M.MenuItem value={ShapeType.pyramid}>Pyramid</M.MenuItem>
          <M.MenuItem value={ShapeType.cube}>Cube</M.MenuItem>
        </M.Select>
      </M.FormControl>
    </M.Stack>
  )
}
