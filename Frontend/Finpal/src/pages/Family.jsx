import { Box, Paper, Typography } from "@mui/material";
import Sidenav from "../component/sidenav";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { BarChart } from '@mui/x-charts/BarChart';
import StockTable from "../component/toptable";
import BasicTable from "./stockspersonlized";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function createData(name, currentPrice, change, percentageChange) {
  return { name, currentPrice, change, percentageChange };
}

const rows = [
    createData('State Bank of India', '₹766.55', '₹-12.50', '-1.60%'),
    createData('ITC Ltd', '₹430.50', '₹-6.45', '-1.48%'),
    createData('S&P 500', '5,123.41', '-75.65', '-1.46%'),
  ];

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
        
      </Box>
      <br />
      <Box>
    <Typography variant="body 1" marginLeft={32}>
        Member Name: Aditya
    </Typography>
    <Box ml={32} mt={2}>
    <Typography variant="h5" gutterBottom>
    Your Stock Portfolio
  </Typography>
    <TableContainer component={Paper} sx={{width:'73rem'}}>
      <Table aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Stock</TableCell>
            <TableCell align="right">Invested Amount</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">%</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.currentPrice}</TableCell>
              <TableCell align="right" sx={{ color: 'red' }}>
                {row.change}
              </TableCell>
              <TableCell align="right" sx={{ color: 'red' }}>
                {row.percentageChange}
              </TableCell>
              <TableCell align="right">
                <IconButton aria-label="expand row" size="small">
                  <ArrowDownwardIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        
      </Table>
    </TableContainer>
    </Box>
    </Box>
    </Box>
    
  );
}
