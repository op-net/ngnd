import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { NetworkData } from "./NetworkData";
import filesData from "../data/files_data.json";
import NetworkDetails from "./NetworkDetails";
import { useNetwork } from "./NetworkContext";

const renderNetworkList = (
  networks: NetworkData[],
  onSelect: (network: NetworkData) => void
) => (
  <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
    <Typography gutterBottom>
      We offer a selection of networks visualized as graphs, each illustrating various usage scenarios. 
      The primary scenarios represent around 45% of total usage. The data can be downloaded in XML or JSON format. 
      Each network is also represented graphically by HTML files.
    </Typography>
    <Box display="flex" flexDirection="column" gap={1} mt={2}>
      {networks.map((network, index) => (
        <Button
          key={index}
          variant="outlined" 
          sx={{
            width: "fit-content",
            color: '#4fa944',
            borderColor: '#4fa944',
            borderRadius: 2, 
            justifyContent: 'flex-start', 
            textTransform: 'none',
            px: 2, 
            '&:hover': {
              borderColor: '#3e8537',
              backgroundColor: '#e6f4e6',
            },
          }}
          onClick={() => onSelect(network)}
        >
          {network.networkName}
        </Button>
      ))}
    </Box>

  </Paper>
);

const Networks = () => {
  const [networks, setNetworks] = useState<NetworkData[]>([]);
  const { selectedNetwork, setSelectedNetwork } = useNetwork();

  useEffect(() => {
    setNetworks(filesData);
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box p={4} width={"100%"} sx={{ flexGrow: 1 }}>
        {selectedNetwork ? (
          <NetworkDetails
            network={selectedNetwork}
            onBack={() => setSelectedNetwork(null)}
          />
        ) : (
          <>
            <Typography variant="h3" component="h1" gutterBottom>
              Networks
            </Typography>
            {renderNetworkList(networks, setSelectedNetwork)}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Networks;
