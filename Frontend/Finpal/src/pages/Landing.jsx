import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import SwipeableTextMobileStepper from '../Components/Carousel'
import ResponsiveAppBar from '../Components/LandingNav';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export const Landing = () => {
    return (
      <Box sx={{ width: "98.9vw" }}>
        <ResponsiveAppBar />
        <SwipeableTextMobileStepper />
        <br /> <br />
        <Stack direction="row" spacing={5} justifyContent="center">
          <Card sx={{ minWidth: 275, borderRadius: 2 }}>
            <CardContent>
              <Typography sx={{ textAlign: "left" }}>
                <Typography variant="h6">Your Recipe</Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  A masterfully crafted DIY financial planning platform
                  <br />
                  to aid you to enhance your net worth.
                </Typography>
                <Typography>Prosperity Index</Typography>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Missing.
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Do you know what's draining you out of your wealth? <br />
                  Do you wish to find out whether you own or owe? <br />
                  Are you sure you have enough to survive <br />
                  a financial emergency? Use Recipe and find out <br />
                  your financial standings according to 4 <br />
                  Prosperity Ingredients.
                </Typography>
                <Typography>Financial Appetite</Typography>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Missing.
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Well begun is half done. With the right approach <br />
                  to investing, you're 60% more likely to achieve your <br />
                  financial goals. Get an insight to your Financial <br />
                  Appetite and know your ideal investment approach <br />
                  in a jiffy. <br />
                </Typography>
                Wait no more, and subscribe now to get access <br />
                to 50+ stock reports and 10+ Mutual fund reports.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
              <Button size="small">Go to Recipe</Button>
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 275, borderRadius: 2 }}>
            <CardContent>
              <Typography sx={{ textAlign: "left" }}>
                <Typography variant="h6">Your Recipe</Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  A masterfully crafted DIY financial planning platform
                  <br />
                  to aid you to enhance your net worth.
                </Typography>
                <Typography>Prosperity Index</Typography>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Missing.
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Do you know what's draining you out of your wealth? <br />
                  Do you wish to find out whether you own or owe? <br />
                  Are you sure you have enough to survive <br />
                  a financial emergency? Use Recipe and find out <br />
                  your financial standings according to 4 <br />
                  Prosperity Ingredients.
                </Typography>
                <Typography>Financial Appetite</Typography>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Missing.
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Well begun is half done. With the right approach <br />
                  to investing, you're 60% more likely to achieve your <br />
                  financial goals. Get an insight to your Financial <br />
                  Appetite and know your ideal investment approach <br />
                  in a jiffy. <br />
                </Typography>
                Wait no more, and subscribe now to get access <br />
                to 50+ stock reports and 10+ Mutual fund reports.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
              <Button size="small">Go to Recipe</Button>
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 275, borderRadius: 2 }}>
            <CardContent>
              <Typography sx={{ textAlign: "left" }}>
                <Typography variant="h6">Your Recipe</Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  A masterfully crafted DIY financial planning platform
                  <br />
                  to aid you to enhance your net worth.
                </Typography>
                <Typography>Prosperity Index</Typography>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Missing.
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Do you know what's draining you out of your wealth? <br />
                  Do you wish to find out whether you own or owe? <br />
                  Are you sure you have enough to survive <br />
                  a financial emergency? Use Recipe and find out <br />
                  your financial standings according to 4 <br />
                  Prosperity Ingredients.
                </Typography>
                <Typography>Financial Appetite</Typography>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Missing.
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Well begun is half done. With the right approach <br />
                  to investing, you're 60% more likely to achieve your <br />
                  financial goals. Get an insight to your Financial <br />
                  Appetite and know your ideal investment approach <br />
                  in a jiffy. <br />
                </Typography>
                Wait no more, and subscribe now to get access <br />
                to 50+ stock reports and 10+ Mutual fund reports.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
              <Button size="small">Go to Recipe</Button>
            </CardActions>
          </Card>
        </Stack>
        {/* <br /> */}

        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
      }}
    >
      <Paper
        sx={{
          padding: 3,
          width: '100%',
          
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          ABOUT US
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to FINPAL, your trusted partner in achieving financial wellness. 
          <br /> <br />
          Our mission is to empower individuals and 
          <br />families with the tools and knowledge they need to take control of their finances.<br /><br />
        </Typography>
        <Typography variant="body1" gutterBottom>
          Driven by a passion for innovation and user-centric design, <br />
          our team has developed a comprehensive platform that centralizes <br />
          savings, investments, and financial management in one accessible place. <br /><br />
        </Typography>
        <Typography variant="body1">
          With FINPAL, you have a reliable ally on your journey towards financial empowerment. <br />
          Explore our platform and start taking control of your finances today.
        </Typography>
      </Paper>
    </Box>
        <Card sx={{ maxWidth: 350, maxHeight: 700, borderRadius: 2 }}>
          <CardContent>
            <Typography sx={{ textAlign: "left" }}>
              <Typography variant="h6">Refer a Friend</Typography>

              <Typography variant="body2" sx={{ mb: 1.5 }}>
                Why go Solo? - Let your friends know about
                <br />
                our amazing products at Finology.
              </Typography>
            </Typography>
          </CardContent>

          <Stack direction="row">
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              placeholder="eg: yourfriend@gmail.com"
              variant="filled"
              size="small"
            />
            <CardActions>
              <Button size="small">REFER</Button>
            </CardActions>
          </Stack>
        </Card>
      </Box>
    );
}