import * as React from "react";
import { LineChart } from "@mui/x-charts";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function SimpleAreaChart() {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Box>
        <Typography variant="h6" color={"grey"}>
          My Networth
        </Typography>
        <Typography variant="h4">RS 1.2 Lakh</Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="Equity ₹1L" variant="outlined" />
          <Chip label="Cash ₹10K" variant="outlined" />
          <Chip label="Gold ₹10K" variant="outlined" />
        </Stack>
      </Box>

      <LineChart
        width={640}
        height={300}
        series={[{ data: uData, label: "uv", area: true, showMark: false }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          ".MuiLineElement-root": {
            display: "none",
          },
        }}
      />
    </Paper>
  );
}
