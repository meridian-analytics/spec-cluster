import * as M from "@mui/material"
import { MuiColorInput } from "mui-color-input"
import React from "react"
import { Selection, UserData } from "spec-cluster"

export default function SingleSelectEditor() {
  const { spectrograms, updateSpectrogram } = UserData.useContext()
  const { selection } = Selection.useContext()
  const selectedIds = Array.from(selection)
  console.log(selectedIds)
  if (selectedIds.length != 1) {
    throw Error("SingleSelectEditor expects selection size of 1")
  }
  const selectedId = selectedIds[0]
  const spectrogram = spectrograms.get(selectedId)
  if (spectrogram == null) {
    throw Error(
      `SingleSelectEditor could not find spectrogram by id: ${selectedId}`,
    )
  }
  function setRadius(newRadius: number) {
    updateSpectrogram(selectedId, prev => {
      return { ...prev, radius: newRadius }
    })
  }
  function setColor(newColor: string) {
    updateSpectrogram(selectedId, prev => {
      return { ...prev, color: newColor }
    })
  }

  return (
    <M.Stack
      sx={{
        // position: "fixed",
        // top: "50%",
        right: 0,
        width: 250,
        bgcolor: "lightblue",
        color: "white",
        borderRadius: 2,
        p: 3,
        transform: "translateY(-50%)",
        margin: 2,
        marginTop: 20,
      }}
    >
      <M.FormControl>
        <M.Typography>Editor</M.Typography>
        <MuiColorInput
          format="hex"
          value={spectrogram.color}
          onChange={setColor}
          sx={{ marginTop: 2 }}
        />
        <M.TextField
          id="standard-basic"
          label="Label"
          variant="standard"
          sx={{ color: "white" }}
          //   value={label}
          //   onChange={e => setLabel(e.target.value)}
        />
      </M.FormControl>
      <M.FormControl>
        <div>
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
            //   value={label}
            //   onChange={e => setLabel(e.target.value)}
          />
          <M.TextField
            id="standard-basic"
            label="Width"
            type="number"
            variant="standard"
            sx={{ color: "white" }}
            //   value={label}
            //   onChange={e => setLabel(e.target.value)}
          />
        </div>
      </M.FormControl>
    </M.Stack>
  )
}
