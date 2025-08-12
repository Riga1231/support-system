import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Container from "@mui/material/Container";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle"; // for status dot

function AgentSidebar({
  children,
  footer,
  status = "busy",
  username = "Jericho",
}) {
  const statusColor =
    {
      active: "rgba(25, 255, 4, 0.6)", // light green
      inactive: "rgba(158, 158, 158, 0.6)", // light gray
      busy: "rgba(255, 152, 0, 0.6)", // light orange
    }[status] || "rgba(158, 158, 158, 0.6)";
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
            paddingRight: 2,
          }}
        >
          <Typography variant="subtitle1" component="div">
            {username}
          </Typography>
          <CircleIcon sx={{ color: statusColor, fontSize: 14 }} />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,

              width: "100%",
              height: "100%",

              backgroundColor: "",
            }}
          >
            <SettingsSuggestIcon
              sx={{ color: "primary.main" }}
              fontSize="medium"
            />
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              component="div"
              fontWeight={500}
            >
              Support System
            </Typography>
          </Box>
        </Toolbar>
        <Divider />
        <List>
          {["Calls Today", "View All Calls"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={Link}
                to={index === 0 ? "home" : "calls"}
                sx={{ textDecoration: "none" }}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Logout"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexGrow: 1, p: 7, minHeight: "90.9vh" }}>{children}</Box>

        <Box component="footer">{footer}</Box>
      </Box>
    </Box>
  );
}

export default AgentSidebar;
