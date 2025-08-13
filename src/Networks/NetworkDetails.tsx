import { Box, Button, Divider, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
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
            <Button sx={{ mt: 2, color: "#4fa944ff" }} onClick={onBack}>
                ← Back to list
            </Button>
            <Typography variant="h4" gutterBottom>
                {network.networkName}
            </Typography>
            <Typography
            sx={{
                fontWeight: 'bold',
                fontSize: "14pt",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                color: '#333',
                display: 'flex',
                alignItems: 'center',
                gap: 1, 
                mb: 2,
            }}
            >
            <span>Nodes: {network.nodesNumber}</span>
            <span style={{ fontWeight: 'normal', fontSize: '1.2rem' }}>•</span>
            <span>Edges: {network.linksNumber}</span>
            </Typography>

            <Button
                variant="contained"
                sx={{
                    mb: 2,
                    backgroundColor: '#4fa944ff',
                    '&:hover': {
                        backgroundColor: '#3e8537ff'
                    }
                }}
                href={`${homepage_url}/${network.folderPath}/${network.xmlFile}`}
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                Download XML
            </Button>
            <Button
                variant="contained"
                color="primary"
                sx={{
                    mb: 2,
                    backgroundColor: '#4fa944ff',
                    '&:hover': {
                        backgroundColor: '#3e8537ff'
                    }
                }}
                href={`${homepage_url}/${network.folderPath}/${network.jsonFile}`}
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                Download JSON
            </Button>
            <Box
                mt={3}
                mb={3}
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
            
                          <Divider />

            
            <Box mt={3} mb={3}>
                <Typography variant="h6">Other Versions:</Typography>
                {network.others.map((other, index) => (
                    <Box key={index} mb={1}>
                        <Typography>{other.versionName}</Typography>
                        <Button
                            variant="outlined"
                            href={`${homepage_url}/${network.folderPath}/${other.xmlFile}`}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: '#4fa944ff',           // text color
                                borderColor: '#4fa944ff',    // outline color
                                '&:hover': {
                                    borderColor: '#3e8537ff',  // darker shade on hover
                                    backgroundColor: '#e6f4e6', // subtle bg on hover (optional)
                                },
                            }}
                        >
                            Download XML
                        </Button>
                        <Button
                            variant="outlined"
                            href={`${homepage_url}/${network.folderPath}/${other.jsonFile}`}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: '#4fa944ff',
                                borderColor: '#4fa944ff',
                                '&:hover': {
                                    borderColor: '#3e8537ff',
                                    backgroundColor: '#e6f4e6',
                                },
                            }}
                        >
                            Download JSON
                        </Button>
                    </Box>
                ))}
            </Box>
            
                          <Divider />

            
            <Box mt={3}>
                <Typography variant="h6">Examples of Usage:</Typography>
                <Table>
                    <TableBody>
                        {network.examples.map((example, index) => (
                            <TableRow key={index}>
                                <TableCell style={{ width: "50%", verticalAlign: "top" }}>
                                    <img
                                        src={`${homepage_url}/${network.folderPath}/${example.pngFile}`}
                                        alt={example.pngFile}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "contain"
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography>{example.description}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </>
    );
};

export default NetworkDetails;
