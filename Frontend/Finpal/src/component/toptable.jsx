import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const StockTable = () => {
  const [stocks, setStocks] = useState([]);
  const [total, setTotal] = useState({ currentValue: 0, investment: 0, returns: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/your-portfolio');
        setStocks(response.data.symbols_data);
        setTotal({
          currentValue: response.data.total_current_value,
          investment: response.data.total_investment,
          returns: response.data.total_return
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <TableContainer component={Paper}>
        <Typography variant="h5" component="div" style={{ textAlign: "start", padding: "1rem", color: 'blue' }}>
            Your Portfolio
        </Typography>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell>Current Price</TableCell>
              <TableCell>Purchase Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Current Value</TableCell>
              <TableCell>Investment</TableCell>
              <TableCell>Returns</TableCell>
              <TableCell>Add to Watchlist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow key={stock.symbol}>
                <TableCell component="th" scope="row">
                  {stock.symbol}
                </TableCell>
                <TableCell>{`₹${stock.current_price.toFixed(2)}`}</TableCell>
                <TableCell>{`₹${stock.purchase_price.toFixed(2)}`}</TableCell>
                <TableCell>{stock.quantity}</TableCell>
                <TableCell>{`₹${stock.current_value.toFixed(2)}`}</TableCell>
                <TableCell>{`₹${stock.investment.toFixed(2)}`}</TableCell>
                <TableCell>{`₹${stock.returns.toFixed(2)}`}</TableCell>
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
      <Typography variant="h6" component="div" style={{ textAlign: "center", padding: "1rem" }}>
        Total Investment: ₹{total.investment.toFixed(2)}, Total Value: ₹{total.currentValue.toFixed(2)}, Total Returns: ₹{total.returns.toFixed(2)}
      </Typography>
    </Paper>
  );
};

export default StockTable;
