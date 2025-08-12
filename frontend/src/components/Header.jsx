import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        width: "100%",

        py: 1,
        backgroundColor: "primary.main",
      }}
    >
      <SettingsSuggestIcon sx={{ color: "white" }} fontSize="medium" />
      <Typography
        sx={{ color: "white" }}
        variant="h6"
        component="div"
        fontWeight={500}
      >
        Support System
      </Typography>
    </Box>
  );
}

export default Header;
