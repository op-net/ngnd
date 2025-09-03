import { useState } from "react";
import Sidebar from "./Sidebar";
import HomePage from "./Homepage";
import Networks from "./Networks/Networks";
import Documentation from "./Documentation";
import Contributors from "./Contributors";
import PrivacyPolicy from "./PrivacyPolicy";
import { NetworkProvider } from "./Networks/NetworkContext";
import { Box, Divider, Link, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type Page = "home" | "networks" | "docs" | "contributors" | "privacy";

const theme = createTheme({
  typography: {
    fontFamily: "'Georgia', serif",
  },
});

function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <ThemeProvider theme={theme}>
      <NetworkProvider>
        <div style={{ display: "flex" }}>
          <Sidebar page={page} setPage={setPage} />
          <div className="flex min-h-screen flex-col" style={{ width: "100%" }}>
            <main style={{ flexGrow: 1, padding: "20px" }}>
              {page === "home" && <HomePage />}
              {page === "networks" && <Networks />}
              {page === "docs" && <Documentation />}
              {page === "contributors" && <Contributors />}
              {page === "privacy" && <PrivacyPolicy />}
            </main>
            <Divider sx={{ width: "50%", margin: "0 auto" }} />
            <Box p={4} textAlign="center">
              <footer>
                <Typography variant="body2" color="text.secondary">
                  The database is maintained under the{" "}
                  <Link
                    href="https://github.com/op-net/ngnd/blob/main/LICENSE"
                    target="_blank"
                  >
                    MIT License
                  </Link>
                  .<br />
                  © 2025 Warsaw University of Technology & Universidad Politécnica de Madrid.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Network structures based on{" "}
                  <Link
                    href="http://sndlib.zib.de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SNDlib
                  </Link>{" "}
                  [Orlowski et al., 2007].
                </Typography>
              </footer>
            </Box>

          </div>
        </div>
      </NetworkProvider>
    </ThemeProvider>
  );
}

export default App;
