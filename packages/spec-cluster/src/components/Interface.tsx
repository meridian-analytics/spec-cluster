import * as M from "@mui/material"
import * as ConfigContext from "../contexts/Configurator"

export type InterfaceProps = unknown // todo

export default function Interface() {
  const {
    renderMode,
    setRenderMode,
    scaleX,
    setScaleX,
    scaleY,
    setScaleY,
    scaleZ,
    setScaleZ,
  } = ConfigContext.useContext()
  return (
    <M.Stack
      spacing={3}
      sx={{
        padding: 3,
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <M.FormControl>
        <M.FormLabel sx={{ color: "white" }}>Scale Axes</M.FormLabel>
        <M.Typography gutterBottom> x-axis</M.Typography>
        <M.Slider
          sx={{
            width: "250px",
          }}
          min={1}
          max={10}
          size="small"
          valueLabelDisplay="auto"
          value={scaleX}
          onChange={(_, value) =>
            setScaleX(Array.isArray(value) ? value[0] : value)
          }
        />
        <M.Typography gutterBottom> y-axis</M.Typography>
        <M.Slider
          sx={{
            width: "250px",
          }}
          min={1}
          max={5}
          size="small"
          valueLabelDisplay="auto"
          value={scaleY}
          onChange={(_, value) =>
            setScaleY(Array.isArray(value) ? value[0] : value)
          }
        />
        <M.Typography gutterBottom> z-axis</M.Typography>
        <M.Slider
          sx={{
            width: "250px",
          }}
          min={1}
          max={5}
          size="small"
          valueLabelDisplay="auto"
          value={scaleZ}
          onChange={(_, value) =>
            setScaleZ(Array.isArray(value) ? value[0] : value)
          }
        />
      </M.FormControl>
      <M.FormControl>
        <M.FormLabel sx={{ color: "white" }}>Display</M.FormLabel>
        <M.RadioGroup
          row
          value={renderMode}
          onChange={e => setRenderMode(Number.parseInt(e.target.value))}
        >
          <M.FormControlLabel
            value={0}
            control={<M.Radio sx={{ color: "white" }} />}
            label="Spectrograms"
          />
          <M.FormControlLabel
            value={1}
            control={<M.Radio sx={{ color: "white" }} />}
            label="Points"
          />
        </M.RadioGroup>
      </M.FormControl>
    </M.Stack>
  )
}
