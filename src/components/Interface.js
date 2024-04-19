import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useConfigurator } from "../contexts/Configurator";

const Interface = () => {
  const {
    renderMode,
    setRenderMode,
    scaleX,
    setScaleX,
    scaleY,
    setScaleY,
    scaleZ,
    setScaleZ,
  } = useConfigurator();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Box className="config-container" p={3}>
          <FormControl>
            <FormLabel sx={{ color: "white" }}>Scale Axes</FormLabel>
            <Typography gutterBottom> x-axis</Typography>
            <Slider
              sx={{
                width: "250px",
              }}
              min={1}
              max={10}
              size="small"
              valueLabelDisplay="auto"
              value={scaleX}
              onChange={(e) => setScaleX(e.target.value)}
            />
            <Typography gutterBottom> y-axis</Typography>
            <Slider
              sx={{
                width: "250px",
              }}
              min={1}
              max={5}
              size="small"
              valueLabelDisplay="auto"
              value={scaleY}
              onChange={(e) => setScaleY(e.target.value)}
            />
            <Typography gutterBottom> z-axis</Typography>
            <Slider
              sx={{
                width: "250px",
              }}
              min={1}
              max={5}
              size="small"
              valueLabelDisplay="auto"
              value={scaleZ}
              onChange={(e) => setScaleZ(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box className="config-container" p={3}>
          <FormControl>
            <FormLabel sx={{ color: "white" }}>Display</FormLabel>
            <RadioGroup
              row
              value={renderMode}
              onChange={(e) => setRenderMode(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={0}
                control={<Radio sx={{ color: "white" }} />}
                label="Spectrograms"
              />
              <FormControlLabel
                value={1}
                control={<Radio sx={{ color: "white" }} />}
                label="Points"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};

export default Interface;
