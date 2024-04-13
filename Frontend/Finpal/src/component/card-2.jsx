import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function SaveCard() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography variant="h6" component="div">
              Current Value
            </Typography>
            <Typography variant="h6" color="text.secondary">
              1000
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" component="div">
              Invested Value
            </Typography>
            <Typography variant="h6" color="text.secondary">
              900
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="div">
              Total Returns
            </Typography>
            <Typography variant="h6" color="text.secondary">
              200
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" component="div">
              Today Returns
            </Typography>
            <Typography variant="h6" color="text.secondary">
              10
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SaveCard;
