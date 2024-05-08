import React from "react";
import { HeaderStyles } from "./HeaderStyles";
import { Box, Button, Typography } from "@mui/material";
import HeaderImg from "../../assets/hero-home.jpg";

function Header() {
  return (
    <>
      <Box
        sx={HeaderStyles.mainContainer}
      >
        <Box>
          <img width={500} height={500} src={HeaderImg} alt="Girl Pic" />
        </Box>
        <Box>
          <Box sx={{ mt: 6 }}>
            <Typography sx={HeaderStyles.oswaldFontContainer} variant="h2">
              We provide easy
            </Typography>
            <Typography sx={HeaderStyles.oswaldFontContainer} variant="h2">
              {" "}
              <span style={HeaderStyles.satisyFontContainer}>
                solutions
              </span>{" "}
              for{" "}
            </Typography>
            <Typography variant="h2" sx={HeaderStyles.oswaldFontContainer}>
              startups at{" "}
            </Typography>
            <Typography variant="h2" sx={HeaderStyles.oswaldFontContainer}>
              affordable rates.{" "}
            </Typography>
            <Typography sx={HeaderStyles.paraText} variant="body1">
              Our methods are straight,comfortable,
              <br /> and established to ensure evolution and <br />
              acceleration.
            </Typography>
          </Box>
          <Box
            sx={HeaderStyles.buttonContainer}
          >
            <Button sx={HeaderStyles.consultationButton} variant="contained">
              Free Consultation
            </Button>
            <Button sx={HeaderStyles.creditsButton} variant="outlined">
              Buy Credits
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Header;
