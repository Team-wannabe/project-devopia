import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../assets/Group.png";
import img1 from "../assets/Frame 5414.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,  
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function SIPCard() {
  return (
    <Card sx={{ maxWidth: 600, borderRadius:2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
          My SIPs
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "grey.200",
            p: 1,
            borderRadius: 1,
          }}
        >
          <img src={img} alt="Logo" style={{ width: 90, height: 70 }} />

          <div style={{ marginLeft: 50 }}></div>

          <img src={img1} alt="Logo" style={{ width: 250, height: 55 }} />
        </Box>
        <br />

        <List>
          <ListItem disableGutters sx={{ paddingY: 1 }}>
            <Box>
              <Stack direction={"row"} gap={40}>
                <Box display={"flex"} alignItems={"center"}>
                  <ListItemIcon>
                    <CurrencyRupeeIcon />
                  </ListItemIcon>

                  <ListItemText
                    primary="Mutual Funds"
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                  <div style={{ marginLeft: 350 }}></div>
                  <ListItemText
                    primary="₹20K"
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                </Box>
              </Stack>
              <Box sx={{ width: "15vw" }}>
                <Box sx={{ width: "100%", mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={20}
                    color="primary"
                  />
                </Box>
              </Box>
            </Box>
          </ListItem>

          {/* Investment 2 */}
          <ListItem disableGutters sx={{ paddingY: 1 }}>
            <Box>
              <Stack direction={"row"} gap={36}>
                <Box display={"flex"} alignItems={"center"}>
                  <ListItemIcon>
                    <CurrencyYenIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="US Stocks"
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                </Box>
                <Button variant="contained" startIcon={<AddIcon />}>
                  <Typography variant="button">Start SIP</Typography>
                </Button>
              </Stack>
              <Box sx={{ width: "15vw" }}>
                <Box sx={{ width: "100%", mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={50}
                    color="secondary"
                  />
                </Box>
              </Box>
            </Box>
          </ListItem>

          {/* Investment 3 */}
          <ListItem disableGutters sx={{ paddingY: 1 }}>
            <Box>
              <Stack direction={"row"} gap={40}>
                <Box display={"flex"} alignItems={"center"}>
                  <ListItemIcon>
                    <CurrencyRupeeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Equity"
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                </Box>
                <Button variant="contained" startIcon={<AddIcon />}>
                  <Typography variant="button">Start SIP</Typography>
                </Button>
              </Stack>
              <Box sx={{ width: "15vw" }}>
                <Box sx={{ width: "100%", mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={30}
                    color="success"
                  />
                </Box>
              </Box>
            </Box>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
