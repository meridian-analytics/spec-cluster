import * as M from "@mui/material"
import { MuiColorInput } from "mui-color-input"
import React from "react"
import { Selection, UserData } from "spec-cluster"

export default function MultiSelectEditor() {
  const [value, setValue] = React.useState("#0000ff")
  const { spectrograms } = UserData.useContext()
  const { selection } = Selection.useContext()
  const handleChange = (newValue: React.SetStateAction<string>) => {
    setValue(newValue)
  }
  React.useEffect(() => {
    for (const id of selection) {
      console.log(spectrograms.get(id))
    }
  })
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
          value={value}
          onChange={handleChange}
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
            //   value={label}
            //   onChange={e => setLabel(e.target.value)}
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
