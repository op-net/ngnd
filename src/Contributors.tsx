import { Box, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

const Contributors = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box p={4} sx={{ flexGrow: 1 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{
          fontFamily: "'DejaVu Sans Mono', monospace",
          color: "#333",
        }}>
          Contributors
        </Typography>
        <Box sx={{ width: "fit-content" }}>
          <Typography variant="body1" paragraph>
            The Next Generation Networks Design Database is built and maintained by an international team of researchers and students:
          </Typography>

          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <List>
              <ListItem>
                <ListItemText
                  primary="Miguel Mendoza"
                  secondary=
                {
      <>
        <Typography component="span" variant="body2" display="block">
          Universidad Politécnica de Madrid — Front-end development, OSNR & distance data integration, documentation
        </Typography>
        <Typography component="span" variant="body2" display="block">
          m.mlarranaga@alumnos.upm.es
        </Typography>
                </>
                }/>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Nel Kulakowska"
                  secondary=
                  {
      <>
        <Typography component="span" variant="body2" display="block">
          Warsaw University of Technology — Network topology template design, data validation, architectural guidance
        </Typography>
        <Typography component="span" variant="body2" display="block">
          nel.kulakowska.stud@pw.edu.pl
        </Typography>
      </>
    }                 
                />
              </ListItem>
              <ListItem>
  <ListItemText
    primary="Stanislaw Kozdrowski"
    secondary={
      <>
        <Typography component="span" variant="body2" display="block">
          Supervisor, Warsaw University of Technology – Project oversight, optical network modeling review
        </Typography>
        <Typography component="span" variant="body2" display="block">
          stanislaw.kozdrowski@pw.edu.pl
        </Typography>
      </>
    }
  />
</ListItem>
            </List>
          </Paper>
        </Box>

        <Typography variant="body2" color="text.secondary">
          We welcome additional contributors and feedback. Please reach out via the contact details on the main page.
        </Typography>
      </Box>
    </Box>
  );
};

export default Contributors;
