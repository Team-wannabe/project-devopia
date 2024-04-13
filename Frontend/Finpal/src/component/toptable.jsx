import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Typography } from '@mui/material';

// Define the stock data
const rows = [
  { id: 'SBIN', name: 'State Bank of India', price: 766.55, change: -12.50, percentage: -1.60 },
  { id: 'ITC', name: 'ITC Ltd', price: 430.50, change: -6.45, percentage: -1.48 },
  // Add more rows as needed...
];

const StockTable = () => {
  return (
    <TableContainer component={Paper} >
        <Typography variant="h5" component="div" style={{textAlign: "start", padding: "1rem",color:'blue'}}>
            Top Stocks
        </Typography>
      <Table  aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{`₹${row.price.toFixed(2)}`}</TableCell>
              <TableCell align="right" sx={{ color: 'red' }}>
                {`₹${row.change.toFixed(2)}`}
                <TrendingDownIcon fontSize="small" sx={{ verticalAlign: 'middle', ml: 1 }} />
              </TableCell>
              <TableCell align="right" sx={{ color: 'red' }}>{`${row.percentage.toFixed(2)}%`}</TableCell>
              <TableCell>
                <IconButton color="primary" aria-label="add to watchlist">
                  <AddCircleOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockTable;
