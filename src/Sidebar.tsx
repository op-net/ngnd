import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from "@mui/material";
import logo from './main_icon.png';
import { useNavigate } from "react-router-dom";
import { homepage_url, networks_url, documentation_url, contributors_url, privacy_policy_url } from "./constants";
import { useNetwork } from './Networks/NetworkContext';


const drawerWidth = 200;

const hoverStyle = {
    color: '#ffffff',
    '&:hover': {
        backgroundColor: '#4c9941ff',
    },
};

const Sidebar = () => {
    const { selectedNetwork, setSelectedNetwork } = useNetwork();
    let navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth, boxSizing: "border-box", backgroundColor: "#4fa944ff"
                },
            }}
        >
            <Box sx={{ p: 2, textAlign: "center" }}>
                <Button onClick={() => navigate(homepage_url)} sx={{ borderRadius: "50%" }}>
                    <img src={logo} alt="Logo" style={{ width: 50, marginBottom: 10 }} />
                </Button>
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => {
                            if (selectedNetwork !== null) {
                                setSelectedNetwork(null);
                            }
                            navigate(networks_url);
                        }}
                        sx={hoverStyle}
                    >
                        <ListItemText primary="Networks" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate(documentation_url)}
                        sx={hoverStyle}
                    >
                        <ListItemText primary="Documentation" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate(contributors_url)}
                        sx={hoverStyle}
                    >
                        <ListItemText primary="Contributors" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate(privacy_policy_url)}
                        sx={hoverStyle}
                    >
                        <ListItemText primary="Privacy Policy" />
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>
    );
};

export default Sidebar;
