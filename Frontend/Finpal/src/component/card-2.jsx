import { Card, CardContent, Typography, Grid, Box, Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';


function SaveCard() {
  return (
    <Card>
      <Typography ml={2} variant="h5" component="div" style={{textAlign: "start"}} color={'blue'}>
        Save More
      </Typography>
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography variant="body2" >
             Spend on Needs
            </Typography>
            <Typography variant="h6" >
              60%
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
        <Box display={'flex'} justifyContent={'center'}>
        <Button style={{color:'white',}} >
          <Link to="/expanses">More Details</Link>  
        </Button>        
        </Box>
      </CardContent>
    </Card>
  );
}

export default SaveCard;
