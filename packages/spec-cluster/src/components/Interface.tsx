import * as M from "@mui/material"
import * as ConfigContext from "../contexts/Configurator"

export type InterfaceProps = {
  sx?: M.StackProps["sx"]
}

export default function Interface(props: InterfaceProps) {
  const { scaleX, setScaleX, scaleY, setScaleY, scaleZ, setScaleZ } =
    ConfigContext.useContext()

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
    </M.Stack>
  )
}
