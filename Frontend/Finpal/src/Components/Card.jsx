import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Stack direction="row">
        <Card sx={{ minWidth: 275, borderRadius: 2}}>
            <CardContent>
                <Typography sx={{textAlign:'left'}}>
                <Typography variant="h6">
                    Your Recipe
                </Typography>

                <Typography variant="body2" sx={{ mb: 1.5 }}>
                A masterfully crafted DIY financial planning platform 
                <br /> 
                to aid you to enhance your net worth.
                </Typography>

                <Typography>Prosperity Index</Typography>
                <Typography variant='h6' sx={{ mb: 1.5 }}>Missing.</Typography>

                <Typography sx={{ mb: 3 }}>
                Do you know what's draining you out of your wealth? <br />
                Do you wish to find out whether you own or owe? <br />
                Are you sure you have enough to survive  <br />
                a financial emergency? Use Recipe and find out  <br />
                your financial standings according to 4 <br />
                Prosperity Ingredients.
                </Typography>
                
                <Typography>Financial Appetite</Typography>
                <Typography variant='h6' sx={{ mb: 1.5 }}>Missing.</Typography>

                <Typography sx={{ mb: 3 }}>
                Well begun is half done. With the right approach <br />
                to investing, you're 60% more likely to achieve your <br /> 
                financial goals. Get an insight to your Financial <br />
                Appetite and know your ideal investment approach  <br />
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

        <Card sx={{ minWidth: 275, borderRadius: 2}}>
            <CardContent>
                <Typography sx={{textAlign:'left'}}>
                <Typography variant="h6">
                    Your Recipe
                </Typography>

                <Typography variant="body2" sx={{ mb: 1.5 }}>
                A masterfully crafted DIY financial planning platform 
                <br /> 
                to aid you to enhance your net worth.
                </Typography>

                <Typography>Prosperity Index</Typography>
                <Typography variant='h6' sx={{ mb: 1.5 }}>Missing.</Typography>

                <Typography sx={{ mb: 3 }}>
                Do you know what's draining you out of your wealth? <br />
                Do you wish to find out whether you own or owe? <br />
                Are you sure you have enough to survive  <br />
                a financial emergency? Use Recipe and find out  <br />
                your financial standings according to 4 <br />
                Prosperity Ingredients.
                </Typography>
                
                <Typography>Financial Appetite</Typography>
                <Typography variant='h6' sx={{ mb: 1.5 }}>Missing.</Typography>

                <Typography sx={{ mb: 3 }}>
                Well begun is half done. With the right approach <br />
                to investing, you're 60% more likely to achieve your <br /> 
                financial goals. Get an insight to your Financial <br />
                Appetite and know your ideal investment approach  <br />
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
  );
}