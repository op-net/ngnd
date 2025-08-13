import { Box, Typography, Paper, List, ListItem, ListItemText, Link } from "@mui/material";
import Sidebar from "./Sidebar";

const Contributors = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box p={4} width="100%" sx={{ flexGrow: 1 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contributors
        </Typography>

        <Typography variant="body1" paragraph>
          The Next Generation Networks Design Database is built and maintained by an international team of researchers and students:
        </Typography>

        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <List>
            <ListItem>
              <ListItemText
                primary="Miguel Mendoza"
                secondary="Universidad Politécnica de Madrid — OSNR & distance data integration"
              />
            </ListItem>
            <Typography component="span">
    Universidad Politécnica de Madrid — 
    <Link href="mailto:m.mlarranaga@alumnos.upm.es">m.mlarranaga@alumnos.upm.es</Link>
  </Typography>
            <ListItem>
              <ListItemText
                primary="Nel Kulakowska"
                secondary="Warsaw University of Technology — Math Algorithm design, Web page development and data validation"
                
              />
              <Typography component="span">
    Warsaw University of Technology — 
    <Link href="mailto:nel.kulakowska.stud@pw.edu.pl">nel.kulakowska.stud@pw.edu.pl</Link>
  </Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Stanislaw Kozdrowski"
                secondary="Supervisor, Warsaw University of Technology — Project oversight, optical network modeling review"
              />
              <Typography component="span">
    Warsaw University of Technology — 
    <Link href="mailto:stanislaw.kozdrowski@pw.edu.pl">stanislaw.kozdrowski@pw.edu.pl</Link>
  </Typography>
            </ListItem>
          </List>
        </Paper>

        <Typography variant="body2" color="text.secondary">
          We welcome additional contributors and feedback. Please reach out via the contact details on the main page.
        </Typography>
      </Box>
    </Box>
  );
};

export default Contributors;
