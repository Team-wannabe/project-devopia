import Speedometer from 'react-d3-speedometer';
import { Card, CardContent, Typography } from '@mui/material';

 export default function RiskMeter({ riskLevel }) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Portfolio Risk Meter
          </Typography>
          <Speedometer
            maxValue={100}
            value={riskLevel}
            needleColor="red"
            startColor="green"
            segments={10}
            endColor="red"
            textColor="grey"
          />
        </CardContent>
      </Card>
    );
  }
  