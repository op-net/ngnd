import { Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const HomePage = () => {

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Next Generation Network Design database.
        </Typography>
        <Typography variant="body1" color="text.secondary">

The Next Generation Networks Design Database is a research library providing realistic optical network data for simulations and validation of next-generation network technologies. Designed for researchers and students, it offers comprehensive datasets to support comparative studies and algorithmic development in optical network design.

The database has been developed through collaboration between Nel Kulakowska from [Warsaw University of Technology](https://zsut.tele.pw.edu.pl/) and Miguel Mendoza from [Universidad Politécnica de Madrid](https://www.upm.es/), under the supervision of Stanislaw Kozdrowski from Warsaw University of Technology.

The core dataset focuses on OSNR (Optical Signal-to-Noise Ratio) measurements and corresponding link distances, computed using validated mathematical algorithms that incorporate fiber losses, amplifier noise figures, and transmission penalties. Researchers gain access to both raw distance data and calculated OSNR values, along with the underlying mathematical models.

This database enables validation of optical network design models, comparison of link budget calculation approaches, and development of new optimization techniques for next-generation optical networks.

For questions or contributions, please contact the maintainers through the affiliated institutions. We welcome community feedback to continuously improve this resource for optical network research and education.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
