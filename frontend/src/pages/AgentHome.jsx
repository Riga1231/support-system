import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ChatIcon from "@mui/icons-material/Chat";

function AgentHome() {
  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
        Agent Dashboard
      </Typography>

      {/* Summary cards */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 6,
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        {[
          { label: "Open Tickets", value: 8 },
          { label: "Resolved Tickets", value: 25 },
          { label: "Pending Responses", value: 4 },
        ].map(({ label, value }) => (
          <Paper
            key={label}
            elevation={3}
            sx={{
              flex: "1 1 200px",
              p: 2,
              textAlign: "center",
              minWidth: 180,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {label}
            </Typography>
            <Typography variant="h3" color="primary">
              {value}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* Ticket ready to respond (centered) */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            maxWidth: 480,
            width: "100%",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 2,
              color: "primary.main",
            }}
          >
            <ChatIcon fontSize="large" />
            <Typography variant="h5" component="div" fontWeight={600}>
              Ticket Ready to Respond
            </Typography>
          </Box>

          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Customer: Jane Smith
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Subject: Unable to reset password
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button variant="outlined" color="primary">
              View Details
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => alert("Opening chat with Jane Smith...")}
            >
              Respond Now
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default AgentHome;
