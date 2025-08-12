import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

        px: 2,
        py: 1,
        backgroundColor: "primary.main",
      }}
    >
      <Typography
        sx={{ color: "white" }}
        variant="caption"
        component="div"
        fontWeight={500}
      >
        Developed by Riga © 2025
      </Typography>
    </Box>
  );
}

export default Footer;
