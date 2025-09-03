import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { NetworkData } from "./NetworkData";
import filesData from "../data/files_data.json";
import Sidebar from "../Sidebar";
import NetworkDetails from "./NetworkDetails";
import { useNetwork } from "./NetworkContext";

const renderNetworkList = (
  networks: NetworkData[],
  onSelect: (network: NetworkData) => void
) => (
  <Box display="flex" flexDirection="column" gap={1} mt={2}>
    {networks.map((network, index) => (
      <Button
        key={index}
         sx={{
                    mb: 2,
                    color: '#ffffff',  
                    backgroundColor: '#4fa944ff',
                    '&:hover': {
                        backgroundColor: '#3e8537ff'
                    },
                    textTransform: "none", width: "fit-content"
                }}
        onClick={() => onSelect(network)}
      >
        {network.networkName}
      </Button>
    ))}
  </Box>
);

const Networks = () => {
  const [networks, setNetworks] = useState<NetworkData[]>([]);
  const { selectedNetwork, setSelectedNetwork } = useNetwork();

  useEffect(() => {
    setNetworks(filesData);
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box p={4} width={"100%"} sx={{ flexGrow: 1 }}>
        {selectedNetwork ? (
          <NetworkDetails
            network={selectedNetwork}
            onBack={() => setSelectedNetwork(null)}
          />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Networks Page
            </Typography>
            {renderNetworkList(networks, setSelectedNetwork)}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Networks;
