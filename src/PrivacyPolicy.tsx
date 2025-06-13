import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

const PrivacyPolicy = () => {
    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <Box p={4} width={"100%"} sx={{ flexGrow: 1 }}>
                <h1>Privacy Policy Page</h1>
            </Box>
        </Box>
    );
}
export default PrivacyPolicy;