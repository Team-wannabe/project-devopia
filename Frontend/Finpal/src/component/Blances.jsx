import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Button, Paper } from '@mui/material';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BalanceComponent() {
  const [value, setValue] = useState(0);
  const [balances] = useState({
    instantCash: '3 L',
    banks: '5 L',
    fixedDeposits: '10 L',
    wallet: '1 L'
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const currentBalance = () => {
    switch (value) {
      case 0:
        return balances.instantCash;
      case 1:
        return balances.banks;
      case 2:
        return balances.fixedDeposits;
      case 3:
        return balances.wallet;
      default:
        return '0';
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
    <Box>
      <Typography variant="h6" component="div">
        My Balances
      </Typography>
    </Box>  
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="balance tabs">
          <Tab label="Instant Cash" {...a11yProps(0)} />
          <Tab label="Banks" {...a11yProps(1)} />
          <Tab label="Fixed Deposits" {...a11yProps(2)} />
          <Tab label="Wallet" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Instant Cash
      </TabPanel>
      <TabPanel value={value} index={1}>
        Banks
      </TabPanel>
      <TabPanel value={value} index={2}>
        Fixed Deposits
      </TabPanel>
      <TabPanel value={value} index={3}>
        Wallet
      </TabPanel>
      <Typography variant="h6" component="div">
        Available to withdraw
      </Typography>
      <Typography variant="h4" component="div" sx={{ mb: 2 }}>
        ₹{currentBalance()}
      </Typography>
      <Button variant="contained">Withdraw now</Button>
    </Box>
    </Paper>
  );
}
