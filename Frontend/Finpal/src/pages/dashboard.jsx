import { Box, Container, Typography } from "@mui/material";
import ClickableChips from "../component/chips";
import InfoCard from "../component/card";
import Sidenav from "../component/sidenav";

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
      <Box display={"flex"} justifyContent={"space-between"}>
        <InfoCard />
        <InfoCard />
      </Box>
    </Container>
    </Box>
  );
};
