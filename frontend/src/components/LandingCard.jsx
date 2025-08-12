import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function LandingCard({ Icon, title, description, buttonText, onButtonClick }) {
  return (
    <Paper
      elevation={4}
      style={{
        height: "100%", // <-- THIS makes it fill the parent height
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        textAlign: "center",
      }}
    >
      {Icon && <Icon style={{ fontSize: 100 }} />}

      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <Typography variant="h6">{description}</Typography>

      <Button
        variant="contained"
        size="large"
        style={{ padding: "12px 32px", fontSize: "1rem", marginTop: 24 }}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </Paper>
  );
}

export default LandingCard;
