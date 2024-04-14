import { Box, Container, Paper, Typography,} from "@mui/material";
import Sidenav from "../component/sidenav";
import SimpleAreaChart from "../component/Graph";
import InvestmentComponent from "../component/card-dash";
import StockTable from "../component/toptable";
import Cumulative from "../component/cumulative";
import Expense from "../component/Expense";
import BalanceComponent from "../component/Blances";
import ReactSpeedometer from "react-d3-speedometer";

export const Dashboard = () => {

  return (
    <Box>
    <Sidenav />
    <Container maxWidth="lg" sx={{  mt: "2rem",ml:'14rem' }}>
      <Box mt={4} display={"flex"} justifyContent={"space-between"}>
      <SimpleAreaChart />
      <InvestmentComponent />
      </Box>
      <StockTable/>
      <Box mt={4} display={"flex"}>
      <Cumulative />
      <Expense />
      <BalanceComponent />
      </Box>
      <Box ml={54} mb={-10} mt={5} display={"flex"} >
      <ReactSpeedometer 
      value={800}
      startColor="green"
      endColor="red"
      currentValueText=" HIGH Risk "
      />
      <Paper elevation={3} sx={{ padding: 2, ml: 12, }}>
        <Typography variant="body">
        Your Spending Habits
        </Typography>
      </Paper>
      </Box>
      <iframe width="1150" height="400" src="https://rss.app/embed/v1/wall/trle22W9o8UTorHS" frameborder="0"></iframe>
    </Container>
   
    </Box>
  );
};
