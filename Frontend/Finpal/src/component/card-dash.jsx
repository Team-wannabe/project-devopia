import React from 'react';
import { Paper, Box, Typography, LinearProgress, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { InsertChartOutlined, AccountBalanceWalletOutlined, SavingsOutlined, AddCircleOutlineOutlined, Settings, Group } from '@mui/icons-material';

const InvestmentComponent = () => {
  const investments = [
    { name: 'Stocks', amount: '₹20K', percentage: 20, icon: <InsertChartOutlined /> },
    { name: 'Mutual funds', amount: '₹50K', percentage: 50, icon: <AccountBalanceWalletOutlined /> },
    { name: 'NPS', amount: '₹30K', percentage: 30, icon: <SavingsOutlined /> },
    { name: 'Savings Account', amount: '₹10K', percentage: 10, icon: <AddCircleOutlineOutlined /> },
  ];

  const progressBarColor = (value) => {
    if (value <= 20) return 'primary';
    if (value <= 50) return 'secondary';
    return 'success';
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle1" fontWeight="bold">My investments & goals</Typography>
        <button>
            <Box display={'flex'} alignItems={'center'}> 
             <Settings/>
             TRY GEN
             </Box>
             </button>
      </Box>
      <List>
        {investments.map((investment, index) => (
          <ListItem key={index} disableGutters sx={{ paddingY: 1 }}>
            <Box>
            <Box display={'flex'} alignItems={'center'} >
            <ListItemIcon>
              {investment.icon}
            </ListItemIcon>
            <ListItemText
              primary={investment.name}
              primaryTypographyProps={{ variant: 'body1' }}
            />
            </Box>
            <Box sx={{width:'30vw'}}>
            
            <Box sx={{ width: '100%', mr: 2 }}>
              <LinearProgress variant="determinate" value={investment.percentage} color={progressBarColor(investment.percentage)} />
            </Box>
            <Typography variant="body2" color="textSecondary">
              {investment.amount}
            </Typography>
            </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default InvestmentComponent;
