import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from "@mui/material";
import logo from "./main_icon.png";
import { useNetwork } from "./Networks/NetworkContext";

const drawerWidth = 200;

type Page = "home" | "networks" | "docs" | "contributors" | "privacy";

interface SidebarProps {
  page: Page;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

const Sidebar: React.FC<SidebarProps> = ({ page, setPage }) => {
  const { selectedNetwork, setSelectedNetwork } = useNetwork();
  
   const getItemStyle = () => ({
    "&:hover": {
      backgroundColor: "#499040ff",
    },
    "&.Mui-selected": {
    backgroundColor: "#45843dff !important",
  },
  });

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#4fa944ff",
          color: "#ffffff",
        },
      }}
    >
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Button onClick={() => setPage("home")} sx={{ borderRadius: "50%" }}>
          <img src={logo} alt="Logo" style={{ width: 80, marginBottom: 10 }} />
        </Button>
      </Box>

      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              if (selectedNetwork !== null) {
                setSelectedNetwork(null);
              }
              setPage("networks");
            }}
            sx={getItemStyle()}
            selected={page === "networks"}
          >
            <ListItemText primary="Networks" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setPage("docs")}
            sx={getItemStyle()}
            selected={page === "docs"}
          >
            <ListItemText primary="Documentation" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setPage("contributors")}
            sx={getItemStyle()}
            selected={page === "contributors"}
          >
            <ListItemText primary="Contributors" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setPage("privacy")}
            sx={getItemStyle()}
            selected={page === "privacy"}
          >
            <ListItemText primary="Privacy Policy" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
