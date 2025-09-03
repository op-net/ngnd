import { Box, Button, Paper, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
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
            <Button sx={{ mt: 2, mb: 2, color: "#4fa944ff" }} onClick={onBack}>
                ← Back to list
            </Button>
            <Typography variant="h4" gutterBottom sx={{
                fontFamily: "'DejaVu Sans Mono', monospace",
                color: "#333",
            }}>
                {network.networkName}
            </Typography>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: "14pt",
                    fontFamily: '"Courier New", serif',
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
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                <Box display="flex" gap={1} flexWrap="wrap">
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
                        href={`${homepage_url}/${network.folderPath}/${network.htmlFile}`}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download HTML
                    </Button>
                </Box>
                <Box
                    border="1px solid #ccc"
                    borderRadius="8px"
                    height="500px"
                    overflow="hidden"
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
            </Paper>

            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                <Box>
                    <Typography variant="h6">Other Versions</Typography>
                    {network.others.map((other, index) => (
                        <Box key={index} mb={2}>
                            <Typography mb={1}>{other.versionName}</Typography>
                            <Box display="flex" gap={1} flexWrap="wrap">
                                <Button
                                    variant="outlined"
                                    href={`${homepage_url}/${network.folderPath}/${other.xmlFile}`}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#4fa944',
                                        borderColor: '#4fa944',
                                        '&:hover': {
                                            borderColor: '#3e8537',
                                            backgroundColor: '#e6f4e6',
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
                                        color: '#4fa944',
                                        borderColor: '#4fa944',
                                        '&:hover': {
                                            borderColor: '#3e8537',
                                            backgroundColor: '#e6f4e6',
                                        },
                                    }}
                                >
                                    Download JSON
                                </Button>
                                <Button
                                    variant="outlined"
                                    href={`${homepage_url}/${network.folderPath}/${other.htmlFile}`}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#4fa944',
                                        borderColor: '#4fa944',
                                        '&:hover': {
                                            borderColor: '#3e8537',
                                            backgroundColor: '#e6f4e6',
                                        },
                                    }}
                                >
                                    Download HTML
                                </Button>
                            </Box>
                        </Box>

                    ))}
                </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                <Box >
                    <Typography variant="h6">Examples of Usage</Typography>
                    <Table>
                        <TableBody>
                            {network.examples.map((example, index) => (
                                <TableRow key={index}>
                                    <TableCell style={{ width: "100%", verticalAlign: "top" }}>
                                        <Box display="flex" flexDirection="column" gap={1}>
                                            <img
                                                src={`${homepage_url}/${network.folderPath}/${example.pngFile}`}
                                                alt={example.pngFile}
                                                style={{
                                                    width: "50%",
                                                    height: "auto",
                                                    objectFit: "contain",
                                                }}
                                            />
                                            <Typography>{example.description}</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </Box>
            </Paper>
        </>
    );
};

export default NetworkDetails;
