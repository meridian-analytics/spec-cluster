import * as M from "@mui/material"
import { Selection, UserData } from "spec-cluster"

export default function MultiSelectEditor() {
  const { spectrograms, updateSpectrogram } = UserData.useContext()
  const { selection } = Selection.useContext()
  const selectedIds = Array.from(selection)
  // console.log(selectedIds)
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
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        width: 250,
        bgcolor: M.colors.grey[300],
        color: "white",
        borderRadius: 2,
        p: 3,
        margin: 2,
        zIndex: 1000,
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
          <M.MenuItem value={"Green"}>Green</M.MenuItem>
          <M.MenuItem value={"Red"}>Red</M.MenuItem>
          <M.MenuItem value={"Yellow"}>Yellow</M.MenuItem>
          <M.MenuItem value={"Brown"}>Brown</M.MenuItem>
        </M.Select>
        <M.TextField
          id="standard-basic"
          label="Label"
          variant="standard"
          value={spectrogram.label}
          // inputProps={{style: {color: "white"}}}
          onChange={e => setLabel(e.target.value)}
        />
      </M.FormControl>
      <M.FormControl>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 7,
          }}
        > */}
        <M.TextField
          id="standard-basic"
          label="Radius"
          type="number"
          variant="standard"
          sx={{ color: "white", marginTop: 2 }}
          value={spectrogram.radius.toFixed(2)}
          onChange={e => setRadius(Number.parseFloat(e.target.value))}
        />
        {/* <M.TextField
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
          /> */}
        {/* </div> */}
      </M.FormControl>
    </M.Stack>
  )
}
