import { Box, Typography, Paper, List, ListItem, ListItemText, Link } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box >
      <Box p={4}>
        <Typography variant="h3" component="h1" gutterBottom sx={{
          fontFamily: "'DejaVu Sans Mono', monospace",
          color: "#333",
        }}>
          Privacy Policy
        </Typography>

        <Typography variant="body1" paragraph>
          The following guidelines apply to the Next Generation Networks Design Database:
        </Typography>

        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <List dense>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Use of submitted data"
                secondary="By submitting any data to this database, you agree it can be published on our webpages. You assure that you have obtained all necessary permissions for any third-party content."
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="E-mail addresses"
                secondary="For confirmation purposes, contributors’ names and contact addresses must be included in submissions. This information will not be publicly displayed in plain text; use the format “username [at] domain [dot] tld” when referencing on a webpage."
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Other personal information"
                secondary="Only publicly available affiliation details are displayed. Personal details beyond affiliation will appear on this site only if explicitly approved by the person concerned."
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Filtering of submissions"
                secondary="We strive to keep the database open and useful. We reserve the right to reject or postpone any submission that negatively impacts data quality or site performance."
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Correctness of provided data"
                secondary="All data undergoes validation and automated checks. While we make every effort to ensure accuracy, we cannot guarantee it. Please report any errors to the maintainers."
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
