export const NavbarStyles = {
  mainContainer: {
    width: "100%",
    boxSizing: 'border-box',
    backgroundColor: "#e1ebfa",
    textDecoration: 'none',
    textUnderline: 'none'
  },
  toolbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    m:2,
    flexGrow: 1,
  },
  linkContainer: {
    display: {md:'flex', xs:'none'},
    gap: 3,
    mr: 20,
    textDecoration: 'none',
    
  },
  linkStyles: {
    textDecoration: 'none',
    color: '#232527',
    fontWeight: 600,
    fontSize: '1.2rem'
  },
};
