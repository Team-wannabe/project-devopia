import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Sidenav from '../component/sidenav';

function createData(name, currentPrice, change, percentageChange) {
  return { name, currentPrice, change, percentageChange };
}

const rows = [
    createData('State Bank of India', '₹766.55', '₹-12.50', '-1.60%'),
    createData('ITC Ltd', '₹430.50', '₹-6.45', '-1.48%'),
    createData('S&P 500', '5,123.41', '-75.65', '-1.46%'),
    createData('Dow Jones Industrial Average', '37,983.24', '-475.84', '-1.24%'),
    createData('BSE SENSEX', '74,244.90', '-793.25', '-1.06%'),
    createData('NIFTY 50', '22,519.40', '-234.40', '-1.03%'),
  ];
  

export default function BasicTable() {
  return (
    <Box>
    <Sidenav />
    <Box ml={32} mt={2}>
    <TableContainer component={Paper} sx={{width:'73rem'}}>
      <Table aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Stock</TableCell>
            <TableCell align="right">Current Price</TableCell>
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
  );
}
