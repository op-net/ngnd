import { Box, Typography, Paper, Divider, List, ListItem, ListItemText, ThemeProvider, createTheme } from "@mui/material";
import { InlineMath, BlockMath } from "react-katex";
import 'katex/dist/katex.min.css';

const model_theme = createTheme({
    typography: {
        fontFamily: "'Segoe UI', serif",
    },
});

const Documentation = () => {
    return (
        <Box sx={{ display: "flex" }} width={"100%"} >
            <Box p={4} width={"100%"} sx={{ flexGrow: 1 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{
                    fontFamily: "'DejaVu Sans Mono', monospace",
                    color: "#333",
                }}>
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
                                primary="Output Power (Pout)"
                                secondary="Set to 1 dBm - standard transmission power level"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Fiber Loss (Lf)"
                                secondary="Calculated as 0.25 × distance (dB/km) - represents attenuation through optical fiber"
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
                                primary="Transmission loss (TX)"
                                secondary="TX = 10 * log10(1 + (10^(-Lf/10) * 10^(Pout/10)) / (10^(-Lm/10) * 10^(Ptx/10)))"
                            />
                        </ListItem>
                        <ListItem>
                        <ListItemText 
                                primary="Mux/Demux Loss (Lm)" 
                                secondary="Set to 10 dB - insertion loss from multiplexing/demultiplexing equipment"
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

                {/* Amplifier location Section */}
                <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Amplifier Location Criteria
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
                        <br />
                        Network occupancy was simulated by drawing the percentage occupancy of each edge from a normal (Gaussian) distribution. 
                        Then, based on this, small, occupied frequency band segments on individual edges were randomly assigned to new channels, 
                        each of which was assigned exclusively to a single edge. This allowed the network to become sufficiently complex.
                    </Typography>
                </Paper>
                {/* Files structure */}
                <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Files structure
                    </Typography>
                    <Typography>
                        Each network has three files: JSON and XML file that define the network structure, and a HTML file with visual representation of the network.
                    </Typography>
                    <Typography>
                        JSON and XML files define the network topology with four main sections:
                    </Typography>
                    <Typography component="div">
                        <ul className="list-disc list-inside">
                            <li><i>nodes</i> – network points with geographic coordinates
                                <ul>
                                    <li><i>id</i> – unique identifier</li>
                                    <li><i>lat</i> – latitude</li>
                                    <li><i>lng</i> – longitude</li>
                                </ul>
                            </li>
                            <li><i>amplifiers</i> – signal boosters with performance metrics
                                <ul>
                                    <li><i>name</i> – unique name</li>
                                    <li><i>lat</i> – latitude</li>
                                    <li><i>lng</i> – longitude</li>
                                    <li><i>OSNR</i> – optical signal-to-noise ratio</li>
                                    <li><i>distance</i> – distance from the source</li>
                                </ul>
                            </li>
                            <li><i>links</i> – connections between nodes, optionally with amplifiers
                                <ul>
                                    <li><i>id</i> – unique identifier</li>
                                    <li><i>source</i> – source node</li>
                                    <li><i>target</i> – target node</li>
                                    <li><i>percentage</i> – link utilization percentage</li>
                                    <li><i>amplifiers</i> – list of amplifiers names used on the link</li>
                                </ul>
                            </li>
                            <li><i>demands</i> – bandwidth demands between nodes, with assigned paths and bands
                                <ul>
                                    <li><i>id</i> – unique identifier</li>
                                    <li><i>startNode</i> – starting node</li>
                                    <li><i>endNode</i> – ending node</li>
                                    <li><i>lambdas</i> – list of wavelength demands
                                        <ul>
                                            <li><i>startSlice</i> – frequency band starting slice</li>
                                            <li><i>endSlice</i> – frequency band ending slice</li>
                                            <li><i>path</i> – assigned path
                                                <ul>
                                                    <li><i>id</i> – unique identifier</li>
                                                    <li><i>linkIds</i> – list of link identifiers</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Typography>
                    <Paper className="p-4 space-y-4" sx={{ p: 3, mb: 4 }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            JSON Structure
                        </Typography>
                        <pre>{`{
    "nodes": [
      {
        "id": "Gdansk",
        "lat": 54.2,
        "lng": 18.6
      }
    ],
    "amplifiers": [
      {
        "name": "Goszczyn ",
        "lat": 51.73187,
        "lng": 20.85154,
        "OSNR": 33.62,
        "distance": 57.22
      }
    ],
    "links": [
      {
        "id": "Link_0_10",
        "source": "Gdansk",
        "target": "Warsaw",
        "percentage": 49,
        "amplifiers": [
          "Gdansk",
          "Nowy-Staw",
          "Susz",
          "Dabrowno",
          "Ciechanow"
        ]
      }
    ],
    "demands": [
      {
        "id": "Demand_Link_0_10_588_659",
        "startNode": "Gdansk",
        "endNode": "Warsaw",
        "lambdas": [
          {
            "startSlice": 588,
            "endSlice": 659,
            "path": {
              "id": "PDemand_Link_0_10_588_659",
              "linkIds": [
                "Link_0_10"
              ]
            }
          }
        ]
      }
    ]
}`}</pre>
                    </Paper>
                    <Paper className="p-4 space-y-4" sx={{ p: 3, mb: 4 }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            XML Structure
                        </Typography>
                        <pre>{`<networkStructure>
    <nodes>
        <node id="Gdansk">
            <coordinates>
                <lng>18.6</lng>
                <lat>54.2</lat>
            </coordinates>
        </node>
    </nodes>
    <amplifiers>
        <amplifier name="Goszczyn ">
            <lat>51.73187</lat>
            <lng>20.85154</lng>
            <OSNR>33.62</OSNR>
            <distance>57.22</distance>
        </amplifier>
    </amplifiers>
    <links>
        <link id="Link_0_10">
            <source>Gdansk</source>
            <target>Warsaw</target>
            <percentage>49</percentage>
            <amplifiers>
                <amplifier name="Gdansk"/>
                <amplifier name="Nowy-Staw"/>
                <amplifier name="Susz"/>
                <amplifier name="Dabrowno"/>
                <amplifier name="Ciechanow"/>
            </amplifiers>
        </link>
    </links>
    <demands>
        <demand id="Demand_Link_0_10_588_659">
            <startNode>Gdansk</startNode>
            <endNode>Warsaw</endNode>
            <lambdas>
                <lambda>
                    <startSlice>588</startSlice>
                    <endSlice>659</endSlice>
                    <path id="PDemand_Link_0_10_588_659">
                        <linkId>Link_0_10</linkId>
                    </path>
                </lambda>
            </lambdas>
        </demand>
    </demands>
</networkStructure>`}</pre>
                    </Paper>
                </Paper>


                {/* Math model */}
                <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Mathematical Model
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The mathematical model used in experiments optimizing the network.
                        It solves a problem of deploying and configuring transponders within nodes to meet a given, single demand.
                        The goal is to assign paths and bands in a way that minimizes the total configuration cost, balances load across edges, and maximizes signal quality.
                        Some results are presented on the bottom of the chosen network page.
                    </Typography>
                    <ThemeProvider theme={model_theme}>
                        <Box sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Sets:
                            </Typography>
                            <ul>
                                <li><InlineMath math="T" /> - set of all transponders</li>
                                <li><InlineMath math="S" /> - set of all frequency slices</li>
                                <li><InlineMath math="E" /> - set of all edges</li>
                                <li><InlineMath math="C" /> - set of all non-repeatable pairs of edges</li>
                                <li><InlineMath math="P" /> - set of all paths</li>
                                <li><InlineMath math="S_t" /> - set of all frequency slices that could be used as a starting slice for transponder <InlineMath math="t \in T" /></li>
                            </ul>

                            <Typography variant="h6" gutterBottom>
                                Constants:
                            </Typography>
                            <ul>
                                <li><InlineMath math="v(t)" /> - bitrate provided by transponder <InlineMath math="t \in T" /></li>
                                <li><InlineMath math="l(p, e)" /> - 1 if edge <InlineMath math="e \in E" /> is in path <InlineMath math="p \in P" />, 0 otherwise</li>
                                <li><InlineMath math="u(t, s, s')" /> - 1 if installed transponder with starting slice <InlineMath math="s \in S_t" /> also uses <InlineMath math="s' \in S_t" />, 0 otherwise</li>
                                <li><InlineMath math="a(e)" /> - cost of amplifiers on edge <InlineMath math="e \in E" /></li>
                                <li><InlineMath math="O(e)" /> - total OSNR value on edge <InlineMath math="e \in E" /></li>
                                <li><InlineMath math="n(e, s)" /> - 1 if slice <InlineMath math="s \in S" /> is already used on edge <InlineMath math="e \in E" />, 0 otherwise</li>
                                <li><InlineMath math="d" /> - data transmission demand</li>
                                <li><InlineMath math="\phi, \delta" /> - weights in the objective function</li>
                                <li><InlineMath math="\xi(t)" /> - cost of transponder <InlineMath math="t \in T" /></li>
                            </ul>

                            <Typography variant="h6" gutterBottom>
                                Variables:
                            </Typography>
                            <ul>
                                <li><InlineMath math="y_{es}" /> - 1 if slice <InlineMath math="s \in S" /> is used on edge <InlineMath math="e \in E" />, 0 otherwise</li>
                                <li><InlineMath math="x_{pts}" /> - 1 if slice <InlineMath math="s \in S" /> is used as starting slice by transponder <InlineMath math="t \in T" /> on path <InlineMath math="p \in P" />, 0 otherwise</li>
                            </ul>

                            <Typography variant="h6" gutterBottom>
                                Objective Function:
                            </Typography>
                            <BlockMath
                                math={`\\min \\sum_{e \\in E} \\sum_{s \\in S} y_{es} 
                + \\phi \\Big(\\sum_{(i, j) \\in C} \\Big|\\sum_{s \\in S} y_{is} - \\sum_{s \\in S} y_{js}\\Big|\\Big) 
                + \\sum_{p \\in P} \\sum_{t \\in T} \\sum_{s \\in S} x_{pts} 
                \\Big[\\xi(t) + \\delta \\cdot \\Big(\\sum_{e \\in E} (a(e) - O(e)) \\cdot l(p, e)\\Big) \\Big]`}
                            />

                            <Typography variant="body1" gutterBottom>
                                The objective function consists of three parts:
                            </Typography>
                            <ol>
                                <li>Minimize used slices on all edges.</li>
                                <li>Minimize differences between slices used on each pair of edges (load-balancing).</li>
                                <li>Minimize cost of transponders and amplifier usage, while maximizing OSNR.</li>
                            </ol>

                            <Typography variant="h6" gutterBottom>
                                Constraints:
                            </Typography>
                            <BlockMath math={String.raw`\sum_{p \in P} \sum_{t \in T} \sum_{s \in S_t} x_{pts} \cdot v(t) \geq d`} />
                            <Typography variant="body1" gutterBottom>
                                Ensures the demand is satisfied.
                            </Typography>

                            <BlockMath math={String.raw`\sum_{p \in P} \sum_{t \in T} \sum_{s \in S_t} u(t, s, s') \cdot x_{pts} \cdot l(p, e) + n(e, s') = y_{es'} \quad \forall e \in E, \forall s' \in S`} />
                            <Typography variant="body1" gutterBottom>
                                Ensures each slice is used at most once—by a new transponder, an existing one, or not at all.
                            </Typography>
                        </Box>
                    </ThemeProvider>
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
