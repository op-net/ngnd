import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from "@mui/material";
import logo from './main_icon.png';
import { useNavigate } from "react-router-dom";
import { homepage_url, networks_url, documentation_url, contributors_url, privacy_policy_url } from "./constants";


const drawerWidth = 200;

const Sidebar = () => {
    let navigate = useNavigate();

    return (
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
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate(networks_url)}>
                        <ListItemText primary="Networks" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate(documentation_url)}>
                        <ListItemText primary="Documentation" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate(contributors_url)}>
                        <ListItemText primary="Contributors" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate(privacy_policy_url)}>
                        <ListItemText primary="Privacy Policy" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
