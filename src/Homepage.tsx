import { Box, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from "@mui/material";
import logo from './main_icon.png';
import { useNavigate } from "react-router-dom";
import { homepage_url } from "./constants";


const drawerWidth = 200;

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", backgroundColor: "#f5f5f5" },
        }}
      >
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Button onClick={() => navigate(homepage_url)} sx={{ borderRadius: "50%" }}>
            <img src={logo} alt="Logo" style={{ width: 50, marginBottom: 10 }} />
          </Button>
        </Box>
        <List>
          {["Networks", "Contributors", "Privacy Policy"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Next Generation Network Design database.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          (TODO text)
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
