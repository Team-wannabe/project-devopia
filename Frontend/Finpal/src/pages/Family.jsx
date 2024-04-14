import { Box, Paper, Typography } from "@mui/material";
import Sidenav from "../component/sidenav";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { BarChart } from '@mui/x-charts/BarChart';
import StockTable from "../component/toptable";

const data = [
  { value: 5, label: "Su" },
  { value: 10, label: "Ad" },
  { value: 15, label: "Ar" },
  { value: 20, label: "Ap" },
];

const size = {
  width: 400,
  height: 200,
};

export default function Family() {
  return (
    <Box>
      <Sidenav />
      <Box>
        <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" align="start" mt={4} ml={32}>
          Family Dashboard
        </Typography>
        <button style={{backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px', marginRight: '20px'}}>Add Member</button>
        </Box>
        <Box display="flex" justifyContent="space-between">
        <Paper elevation={3} sx={{ padding: 2, ml: 32, mt: 4 }}>
          <Typography variant="body" color={"gray"}>
            Total Members Portfolio
          </Typography>
          <Box>
            <PieChart
              series={[
                {
                  arcLabel: (item) => `${item.label} (${item.value})`,
                  arcLabelMinAngle: 45,
                  data,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontWeight: "bold",
                },
              }}
              {...size}
            />
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ padding: 2, ml: 12, mt: 4 }}>
            <Typography variant="body" color={"gray"}>
                Total Members Expenses
            </Typography>
        <BarChart
      xAxis={[{ scaleType: 'band', data: ['Sujal', 'Aditya', 'Arpit','Apoorv'] }]}
      series={[{ data: [4, 3, 5,4] }, { data: [1, 6, 3,2] }, { data: [2, 5,2,6] },   ]}
      width={500}
      height={300}
    />
        </Paper>
        </Box>
        <Paper elevation={3} sx={{ padding: 2, ml: 12, mt: 4 }}>
            <Typography variant="body" ml={24} color={"gray"}>
                Total Members Investments
            </Typography>
            
        </Paper>
      </Box>
    </Box>
  );
}
