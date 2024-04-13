import { Box, Container,} from "@mui/material";
import Sidenav from "../component/sidenav";
import SimpleAreaChart from "../component/Graph";
import InvestmentComponent from "../component/card-dash";
import StockTable from "../component/toptable";
<<<<<<< HEAD
import Cumulative from "../component/cumulative";
import Expense from "../component/Expense";
import BalanceComponent from "../component/Blances";
=======
import SIPCard from "../component/SIPCard";
>>>>>>> 564c7798b6f9d1f18c4d444a3bfa38016d0b57a8

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
<<<<<<< HEAD
      <Box mt={4} display={"flex"}>
      <Cumulative />
      <Expense />
      <BalanceComponent />
      </Box>
      <iframe width="1150" height="400" src="https://rss.app/embed/v1/wall/trle22W9o8UTorHS" frameborder="0"></iframe>
    </Container>
   
=======
      <br />
      <SIPCard />
    </Container>
    
>>>>>>> 564c7798b6f9d1f18c4d444a3bfa38016d0b57a8
    </Box>
  );
};
