import { Box, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

const Contributors = () => {
  return (
    <Box sx={{ display: "flex" }}>
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
                secondary="Universidad Politécnica de Madrid — Front-end development, OSNR & distance data integration, documentation"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Nel Kulakowska"
                secondary="Warsaw University of Technology — Network topology template design, data validation, architectural guidance"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Stanislaw Kozdrowski"
                secondary="Supervisor, Warsaw University of Technology — Project oversight, optical network modeling review"
              />
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
