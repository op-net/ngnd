import { Box, Typography, Paper, Divider, List, ListItem, ListItemText } from "@mui/material";
import Sidebar from "./Sidebar";

const Documentation = () => {
    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <Box p={4} width={"100%"} sx={{ flexGrow: 1 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Documentation
                </Typography>
                
                <Typography variant="body1" paragraph>
                    The Next Generation Networks Design Database provides comprehensive optical network 
                    performance data for research and educational purposes, focusing on OSNR calculations 
                    and link distance analysis.
                </Typography>

                {/* OSNR Calculation Section */}
                <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        OSNR Calculation Methodology
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The Optical Signal-to-Noise Ratio (OSNR) calculations in our database are based on 
                        industry-standard optical link budget principles. The algorithm considers multiple 
                        factors that affect signal quality in optical fiber transmission systems.
                    </Typography>
                    
                    <Typography variant="h6" component="h3" gutterBottom>
                        Mathematical Formula
                    </Typography>
                    <Paper sx={{ p: 2, backgroundColor: '#f5f5f5', fontFamily: 'monospace', mb: 2 }}>
                        OSNR = 58 + Pout - Lf - NF - TX - Gr - Pen
                    </Paper>
                    
                    <Typography variant="h6" component="h3" gutterBottom>
                        Parameters Used
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText 
                                primary="Fiber Loss (Lf)" 
                                secondary="Calculated as 0.25 × distance (dB/km) - represents attenuation through optical fiber"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Output Power (Pout)" 
                                secondary="Set to 1 dBm - standard transmission power level"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Transmission Power (Ptx)" 
                                secondary="Set to 0 dBm - reference transmission level"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Noise Figure (NF)" 
                                secondary="5.5 dB - accounts for amplifier noise contribution"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Gain Ripple (Gr)" 
                                secondary="1 dB - compensates for amplifier gain variations"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Penalty (Pen)" 
                                secondary="2 dB - system margin for various impairments"
                            />
                        </ListItem>
                    </List>
                </Paper>

                {/* Distance Selection Section */}
                <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Distance Selection Criteria
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The link distances used in our database represent realistic fiber optic network 
                        scenarios commonly found in telecommunications infrastructure. These distances 
                        were selected to provide comprehensive coverage of different network topologies 
                        and transmission requirements.
                    </Typography>
                    
                    <Typography variant="h6" component="h3" gutterBottom>
                        Distance Range Characteristics
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText 
                                primary="Short-haul links (40-60 km)" 
                                secondary="Metropolitan area networks and inter-city connections"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Medium-haul links (60-80 km)" 
                                secondary="Regional networks and backbone connections"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Extended links (80+ km)" 
                                secondary="Long-distance transmission requiring amplification"
                            />
                        </ListItem>
                    </List>
                </Paper>

                {/* Algorithm Implementation Section */}
                <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Algorithm Implementation
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our OSNR calculation algorithm implements a comprehensive optical link budget 
                        model that accounts for both linear and nonlinear effects in fiber optic transmission.
                    </Typography>
                    
                    <Typography variant="h6" component="h3" gutterBottom>
                        Implementation Steps
                    </Typography>
                    <Paper sx={{ p: 2, backgroundColor: '#f5f5f5', fontFamily: 'monospace', mb: 2 }}>
                        {`for each distance d in dataset:
    Lf = 0.25 * d  // Calculate fiber loss
    TX = 10 * log10(1 + (10^(-Lf/10) * 10^(Pout/10)) / (10^(-Lm/10) * 10^(Ptx/10)))
    OSNR = 58 + Pout - Lf - NF - TX - Gr - Pen
    store(distance, OSNR)`}
                    </Paper>
                    
                    <Typography variant="body1" paragraph>
                        The transmission penalty (TX) calculation incorporates the relationship between 
                        signal power, fiber loss, and mux/demux insertion losses to provide accurate 
                        OSNR predictions for real-world optical networks.
                    </Typography>
                </Paper>

                {/* Data Collection Section */}
                <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Data Collection and Organization
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The database contains systematically collected OSNR measurements and calculations 
                        organized into multiple datasets for different network scenarios and research applications.
                    </Typography>
                    
                    <Typography variant="h6" component="h3" gutterBottom>
                        Data Structure
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText 
                                primary="Input Data" 
                                secondary="Link distances ranging from 39.47 km to 101.23 km"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Calculated Results" 
                                secondary="OSNR values computed using the validated mathematical model"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Algorithm Parameters" 
                                secondary="Complete set of optical link budget parameters and constants"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Validation Data" 
                                secondary="Cross-referenced results ensuring calculation accuracy"
                            />
                        </ListItem>
                    </List>
                    
                    <Typography variant="h6" component="h3" gutterBottom>
                        File Organization
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Each dataset is organized with corresponding distance inputs and OSNR outputs, 
                        allowing researchers to validate their own calculations, compare different 
                        approaches, and develop new optimization algorithms for optical network design.
                    </Typography>
                </Paper>

                <Divider sx={{ my: 4 }} />
                
                <Typography variant="body2" color="text.secondary">
                    For technical questions or contributions to the database, please contact the 
                    development team through the affiliated institutions.
                </Typography>
            </Box>
        </Box>
    );
}

export default Documentation;
