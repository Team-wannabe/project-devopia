import { Box, Container, Typography } from "@mui/material";
import ClickableChips from "../component/chips";
import InfoCard from "../component/card";
import Sidenav from "../component/sidenav";
import SaveCard from "../component/card-2";
import StockList from "../component/toptable";

export const Dashboard = () => {
  return (
    <Box>
    <Sidenav />
    <Container maxWidth="lg" sx={{  mt: "2rem",ml:'14rem' }}>
      <Box display={"flex"} justifyContent={"space-between"} mb={4}>
        <ClickableChips
          label="Nifty data"
          link="https://www.google.com/finance/quote/NIFTY_50:INDEXNSE"
        />
        <ClickableChips
          label="Nifty data"
          link="https://www.google.com/finance/quote/NIFTY_50:INDEXNSE"
        />
        <ClickableChips
          label="Nifty data"
          link="https://www.google.com/finance/quote/NIFTY_50:INDEXNSE"
        />
        <ClickableChips
          label="Nifty data"
          link="https://www.google.com/finance/quote/NIFTY_50:INDEXNSE"
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} mb={4}>
        <InfoCard />
        <SaveCard />
      </Box>
      <Box mb={4} >
      <StockList />
      </Box>
      <Box>
      <iframe width="1150" height="400" src="https://rss.app/embed/v1/wall/trle22W9o8UTorHS" frameborder="0"></iframe>
      </Box>
    </Container>
    </Box>
  );
};
