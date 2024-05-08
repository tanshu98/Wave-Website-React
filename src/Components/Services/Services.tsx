import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ServicesStyles } from "./ServicesStyles";
import cardSvg from "../../assets/card svg.svg";
import aeroplaneSvg from "../../assets/aeroplane svg.svg";
import mercedesSvg from "../../assets/mercedes svg.svg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import clock from '../../assets/clock svg.svg';

function Services() {
  return (
    <>
      <Box sx={ServicesStyles.mainContainer}>
        <Box sx={ServicesStyles.textContainer}>
          <Typography sx={ServicesStyles.oswaldFontContainer} variant="h2">
            You will get the
          </Typography>
          <Typography sx={ServicesStyles.oswaldFontContainer} variant="h2">
            perfect{" "}
            <span style={ServicesStyles.satisyFontContainer}>resolutions</span>{" "}
            with{" "}
          </Typography>
          <Typography variant="h2" sx={ServicesStyles.oswaldFontContainer}>
            our proficient services.{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            gap: 6,
            mt: 6,
            mb: 6,
            flexWrap: 'wrap',
            textAlign: 'center'
          }}
        >
          <Box>
            <img
              style={ServicesStyles.mercedesImg}
              src={mercedesSvg}
              alt="Market Research"
            />
            <Box sx={ServicesStyles.servicesTextContainer}>
              <Typography
                variant="h4"
                sx={ServicesStyles.servicesHeadingText}
              >
                Market Research
              </Typography>
              <Typography
                variant="body1"
                sx={ServicesStyles.servicesPara}
              >
                We can help you to <br /> understand your target <br /> market
                and identify new opportunities for <br /> growth. We offer a
                variety of market research <br /> services, interviews, and
                focus groups.
              </Typography>
              <Box sx={ServicesStyles.learnMoreContainer}>
              <Button sx={ServicesStyles.learnMoreButton} >Learn More  </Button>
              <ArrowForwardIcon sx={ServicesStyles.arrowButton} />
              </Box>
            </Box>
          </Box>
          <Box>
            <img
              style={ServicesStyles.cardImg}
              src={cardSvg}
              alt="Web Design"
            />
            <Box sx={ServicesStyles.servicesTextContainer}>
              <Typography
                variant="h4"
                sx={ServicesStyles.servicesHeadingText}
              >
                Web Design
              </Typography>
              <Typography
                variant="body1"
                sx={ServicesStyles.servicesPara}
              >
                We can help you to create a visually<br /> appealing and user-friendly website.<br /> We take into account your brand <br /> identity and target audience when <br /> designing your website.
              </Typography>
              <Box sx={ServicesStyles.learnMoreContainer}>
              <Button sx={ServicesStyles.learnMoreButton} >Learn More  </Button>
              <ArrowForwardIcon sx={ServicesStyles.arrowButton} />
              </Box>
            </Box>
          </Box>
          <Box>
            <img
              style={ServicesStyles.aeroplaneImg}
              src={aeroplaneSvg}
              alt="SEO Services"
            />
            <Box sx={ServicesStyles.servicesTextContainer}>
              <Typography
                variant="h4"
                sx={ServicesStyles.servicesHeadingText}
              >
                SEO Services
              </Typography>
              <Typography
                variant="body1"
                sx={ServicesStyles.servicesPara}
              >
                We can help you to improve your <br /> website's visibility in search engine<br />results pages (SERPs). This can lead to<br /> more traffic to your website and more <br /> conversions.
              </Typography>
              <Box sx={ServicesStyles.learnMoreContainer}>
              <Button sx={ServicesStyles.learnMoreButton} >Learn More  </Button>
              <ArrowForwardIcon sx={ServicesStyles.arrowButton} />
              </Box>
            </Box>
          </Box>
          <Box>
            <img
              style={ServicesStyles.clockImg}
              src={clock}
              alt="Content Marketing
              "
            />
            <Box sx={ServicesStyles.servicesTextContainer}>
              <Typography
                variant="h4"
                sx={ServicesStyles.servicesHeadingText}
              >
               Content Marketing
              </Typography>
              <Typography
                variant="body1"
                sx={ServicesStyles.servicesPara}
              >
                We can help you to promote your <br /> business online through a variety of<br />digital marketing channels, including<br /> SEO, PPC, social media marketing, and <br /> email marketing.
              </Typography>
              <Box sx={ServicesStyles.learnMoreContainer}>
              <Button sx={ServicesStyles.learnMoreButton} >Learn More  </Button>
              <ArrowForwardIcon sx={ServicesStyles.arrowButton} />
              </Box>
            </Box>
          </Box>
          
        </Box>
      </Box>
    </>
  );
}

export default Services;
