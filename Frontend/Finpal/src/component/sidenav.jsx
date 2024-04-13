import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../assets/finpal-removebg-preview.png";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10rem",
        }}
      >
        <img src={Logo} alt="Logo" style={{ width: "10rem" }} />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "15rem",
        }}
      >
         <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/family">
            <ListItemIcon>
              <FamilyRestroomIcon />
            </ListItemIcon>
            <ListItemText primary="Family" />
          </ListItem>
          <ListItem button component={Link} to="/account">
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem button component={Link} to="/support">
            <ListItemIcon>
              <SupportAgentIcon />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
        </List>
        </Box>
        <Divider />
        <List>
          <ListItem  component={Link} to="/">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      
    </Drawer>
  );
}

export default Sidenav;
