import { Box, Typography } from "@mui/material";

function DatabaseInfo() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" color="text.secondary" paragraph>
        The Next Generation Networks Design Database is a research library providing realistic optical network data for simulations and validation of next-generation network technologies. Designed for researchers and students, it offers comprehensive datasets to support comparative studies and algorithmic development in optical network design.
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        The database has been developed through collaboration between Nel Kulakowska from{' '}
        <a href="https://zsut.tele.pw.edu.pl/" target="_blank" rel="noopener noreferrer">
          Warsaw University of Technology
        </a>{' '}
        and Miguel Mendoza from{' '}
        <a href="https://www.upm.es/" target="_blank" rel="noopener noreferrer">
          Universidad Politécnica de Madrid
        </a>
        , under the supervision of Stanislaw Kozdrowski from Warsaw University of Technology.
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        The core dataset focuses on OSNR (Optical Signal-to-Noise Ratio) measurements and corresponding link distances, computed using validated mathematical algorithms that incorporate fiber losses, amplifier noise figures, and transmission penalties. Researchers gain access to both raw distance data and calculated OSNR values, along with the underlying mathematical models.
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        This database enables validation of optical network design models, comparison of link budget calculation approaches, and development of new optimization techniques for next-generation optical networks.
      </Typography>

      <Typography variant="body1" color="text.secondary">
        For questions or contributions, please contact the maintainers through the affiliated institutions. We welcome community feedback to continuously improve this resource for optical network research and education.
      </Typography>

    </Box>
  );
}

const HomePage = () => {

  return (
    <Box sx={{ display: "flex" }}>

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h3" gutterBottom sx={{
          fontFamily: "'DejaVu Sans Mono', monospace",
          color: "#333",
        }}>
          Welcome to Next Generation Network Design database.
        </Typography>
        <DatabaseInfo />
      </Box>
    </Box>
  );
};

export default HomePage;
