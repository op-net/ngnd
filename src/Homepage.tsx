import { Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const HomePage = () => {

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

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
