import * as M from "@mui/material"
import * as Configurator from "../contexts/Configurator"

export type InterfaceProps = {
  sx?: M.StackProps["sx"]
  xmax?: number
  xmin?: number
  ymax?: number
  ymin?: number
  zmax?: number
  zmin?: number
}

export default function Interface(props: InterfaceProps) {
  const config = Configurator.useContext()
  return (
    <M.Stack
      sx={{
        backgroundColor: M.colors.grey[800],
        borderRadius: 3,
        color: "white",
        margin: 2,
        padding: 3,
        position: "absolute",
        right: 0,
        spacing: 3,
        top: 0,
        ...props.sx,
      }}
    >
      <M.FormControl>
        <M.FormLabel sx={{ color: "white" }}>Scale Axes</M.FormLabel>
        <M.Typography>x-axis</M.Typography>
        <Slider
          max={props.xmax}
          min={props.xmin}
          setValue={config.setScaleX}
          value={config.scaleX}
        />
        <M.Typography>y-axis</M.Typography>
        <Slider
          max={props.ymax}
          min={props.ymin}
          setValue={config.setScaleY}
          value={config.scaleY}
        />
        <M.Typography>z-axis</M.Typography>
        <Slider
          max={props.zmax}
          min={props.zmin}
          setValue={config.setScaleZ}
          value={config.scaleZ}
        />
      </M.FormControl>
    </M.Stack>
  )
}

type SliderProps = {
  max?: M.SliderProps["max"]
  min?: M.SliderProps["min"]
  setValue: (value: number) => void
  sx?: M.SliderProps["sx"]
  value: number
}

function Slider(props: SliderProps) {
  return (
    <M.Slider
      sx={{
        width: "250px",
        ...props.sx,
      }}
      step={0.01}
      min={props.min ?? 1}
      max={props.max ?? 5}
      size="small"
      valueLabelDisplay="auto"
      value={props.value}
      onChange={(_, value) =>
        props.setValue(Array.isArray(value) ? value[0] : value)
      }
    />
  )
}
