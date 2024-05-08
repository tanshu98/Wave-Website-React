export const HeaderStyles = {
  mainContainer: {
    width: "100%",
    pt: 6,
    pb: 6,
    backgroundColor: "#e1ebfa",
    display: "flex",
    flexDirection: { sm: "row-reverse", xs: "column" },
    justifyContent: "space-around",
    gap: 2,
    flexWrap: "wrap",
    textAlign: 'center'
  },
  oswaldFontContainer: {
    fontFamily: "Oswald",
    fontWeight: 600,
  },
  satisyFontContainer: {
    fontFamily: "satisfy",
    fontWeight: 400,
    color: "#a30000",
    textDecoration: "underline #b8e1ff 10px",
  },
  paraText: {
    fontSize: "1.7rem",
    fontWeigth: 400,
    mt: 2,
    mb: 3,
  },
  buttonContainer: {
    display: "flex",
    gap: 2,
    flexDirection: { xs: "column", sm: "column", md: "row" },
    width: { xs: "70%", sm: "100%" },
  },
  consultationButton: {
    backgroundColor: "#2f3f9f",
    borderRadius: "50px 50px",
    p: 2,
    fontSize: "1.2rem",
    "&:hover": { backgroundColor: "#283687" },
  },
  creditsButton: {
    color: "#2f3f9f",
    borderRadius: "50px 50px",
    p: 2,
    fontSize: "1.2rem",
    border: "1px solid #2f3f9f",
    "&:hover": { backgroundColor: "#2f3f9f", color: "#fff" },
  },
};
