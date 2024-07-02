import * as M from "@mui/material"
import * as ConfigContext from "../contexts/Configurator"
import * as ClickModeContext from "../contexts/ClickMode"

export type InterfaceProps = {
  sx?: M.StackProps["sx"]
}

export default function Interface(props: InterfaceProps) {
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

  const { clickMode, setClickMode } = ClickModeContext.useContext()
  return (
    <M.Stack
      sx={{
        backgroundColor: M.colors.grey[800],
        borderRadius: 3,
        color: "white",
        padding: 3,
        position: "absolute",
        right: 0,
        spacing: 3,
        top: 0,
        margin: 2,
        ...props.sx,
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
      <M.FormControl>
        <M.FormLabel sx={{ color: "white" }}>Click Mode</M.FormLabel>
        <M.RadioGroup
          row
          value={clickMode}
          onChange={e => setClickMode(e.target.value)}
        >
          <M.FormControlLabel
            value={ClickModeContext.ClickMode.detailed}
            control={<M.Radio sx={{ color: "white" }} />}
            label="Detailed"
          />
          <M.FormControlLabel
            value={ClickModeContext.ClickMode.selection}
            control={<M.Radio sx={{ color: "white" }} />}
            label="Selection"
          />
        </M.RadioGroup>
      </M.FormControl>
    </M.Stack>
  )
}
