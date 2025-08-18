import { useState } from "react";
import Sidebar from "./Sidebar";
import HomePage from "./Homepage";
import Networks from "./Networks/Networks";
import Documentation from "./Documentation";
import Contributors from "./Contributors";
import PrivacyPolicy from "./PrivacyPolicy";
import { NetworkProvider } from "./Networks/NetworkContext";

type Page = "home" | "networks" | "docs" | "contributors" | "privacy";

function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <NetworkProvider>
      <div style={{ display: "flex" }}>
        <Sidebar page={page} setPage={setPage} />
        <main style={{ flexGrow: 1, padding: "20px" }}>
          {page === "home" && <HomePage />}
          {page === "networks" && <Networks />}
          {page === "docs" && <Documentation />}
          {page === "contributors" && <Contributors />}
          {page === "privacy" && <PrivacyPolicy />}
        </main>
      </div>
    </NetworkProvider>
  );
}

export default App;
