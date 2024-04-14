import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, TextField, DialogTitle } from '@mui/material';
import axios from 'axios';  // Import axios

export default function StockDialog() {
  const [open, setOpen] = React.useState(false);
  const [stock, setStock] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [price, setPrice] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (event) => {
    setStock(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleAddToPortfolio = async () => {
    // Data to send
    const stockData = {
      stock: stock,
      quantity: Number(quantity),
      price: Number(price)
    };

    try {
      // Perform the API call to add the stock to the portfolio using fetch
      const response = await fetch('http://127.0.0.1:8080/adding-to-portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stockData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add stock to portfolio');
      }
  
      const responseData = await response.json();
      console.log('Stock added successfully:', responseData);
      handleClose();
      window.location.reload() // Close the dialog on success
    } catch (error) {
      console.error('Failed to add stock to portfolio:', error);
      // Handle errors here, such as displaying an error message
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Stock to Portfolio
      </Button>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add to Portfolio</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '100%',
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="search-stock"
              label="Search Stocks"
              type="text"
              width="100%"
              variant="outlined"
              value={stock}
              onChange={handleSearchChange}
              sx={{ mt: 2, }}
            />
            <TextField
              margin="dense"
              id="quantity"
              label="Quantity"
              type="number"
              fullWidth
              variant="outlined"
              value={quantity}
              onChange={handleQuantityChange}
              sx={{ mt: 2 }}
            />
            <TextField
              margin="dense"
              id="price"
              label="Purchase Price"
              type="number"
              fullWidth
              variant="outlined"
              value={price}
              onChange={handlePriceChange}
              sx={{ mt: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddToPortfolio}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
