import * as M from "@mui/material"
import { MuiColorInput } from "mui-color-input"

export default function MultiSelectEditor() {
  return (
    <M.Box
      component={"div"}
      sx={{
        position: "fixed",
        top: "50%",
        right: 0,
        width: 250,
        bgcolor: "lightblue",
        color: "white",
        borderRadius: 2,
        p: 3,
        transform: "translateY(-50%)",
        margin: 2,
        marginTop: 5,
      }}
    >
      <M.Typography>Editor</M.Typography>
      <M.TextField
        id="standard-basic"
        label="Label"
        variant="standard"
        sx={{ color: "white" }}
        //   value={label}
        //   onChange={e => setLabel(e.target.value)}
      />
      <MuiColorInput value={"blue"} sx={{ marginTop: 2 }} />
    </M.Box>
  )
}
