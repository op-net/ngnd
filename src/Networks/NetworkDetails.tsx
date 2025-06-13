import { Box, Button, Typography } from "@mui/material";
import { NetworkData } from "./NetworkData";
import React from "react";
import { homepage_url } from "../constants";

interface NetworkDetailsProps {
    network: NetworkData;
    onBack: () => void;
}

const NetworkDetails: React.FC<NetworkDetailsProps> = ({ network, onBack }) => {
    return (
        <>
            <Button variant="text" sx={{ mt: 2 }} onClick={onBack}>
                ← Back to list
            </Button>
            <Typography variant="h4" gutterBottom>
                {network.networkName}
            </Typography>
            <Typography>Nodes: {network.nodesNumber}</Typography>
            <Typography>Edges: {network.linksNumber}</Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ mb: 2 }}
                href={`${homepage_url}/${network.folderPath}/${network.xmlFile}`}
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                Download XML
            </Button>
            <Box
                mt={3}
                p={2}
                border="1px solid #ccc"
                borderRadius="8px"
                height="500px"
                overflow="hidden"
                width={"90%"}
            >
                <iframe
                    src={`${homepage_url}/${network.folderPath}/${network.htmlFile}`}
                    title="Network HTML"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                />
            </Box>
        </>
    );
};

export default NetworkDetails;
