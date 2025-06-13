import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

const Documentation = () => {
    return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box p={4} width={"100%"} sx={{ flexGrow: 1 }}>
        <h1>Documentation Page</h1>
      </Box>
    </Box>
  );
}
export default Documentation;