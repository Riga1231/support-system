import React, { useEffect } from "react";
import { Modal, Box, Typography } from "@mui/material";
import Form from "./Form";
import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Stack } from "@mui/system";

function TicketModal({
  open,
  handleClose,
  onCreateTicketSubmit,
  initialView = "create",
}) {
  const [view, setView] = useState(initialView);
  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  function CreateTicketForm() {
    return (
      <Form
        fields={[
          {
            label: "Full Name",
            name: "fullName",
            validators: ["required"],
            errorMessages: ["Full Name is required"],
          },
          {
            label: "Email",
            name: "email",
            type: "email",
            validators: ["required", "isEmail"],
            errorMessages: ["Email is required", "Email is not valid"],
          },
          {
            label: "Category",
            name: "category",
            type: "select",
            validators: ["required"],
            errorMessages: ["Category is required"],
            options: [
              { label: "Login Issue", value: "login" },
              { label: "Payment Problem", value: "payment" },
              { label: "Bug Report", value: "bug" },
              { label: "Feature Request", value: "feature" },
              { label: "Other", value: "other" },
            ],
          },
          {
            label: "Subject",
            name: "subject",
            placeholder: "Brief summary of your issue",
            validators: ["required"],
            errorMessages: ["Subject is required"],
          },
          {
            label: "Description",
            name: "description",
            type: "textarea",
            placeholder: "Please describe your issue or question in detail.",

            validators: ["required"],
            errorMessages: ["Description is required"],
            maxLength: 500,
          },
        ]}
        title="Ticket Details"
        onSubmit={onCreateTicketSubmit}
        submitLabel="Send Ticket"
        hasClear
      />
    );
  }

  function SuccessfulTicketForm({ referenceNo }) {
    return (
      <Box textAlign="center" p={3}>
        <Stack alignItems="center" spacing={2}>
          <CheckCircleOutlineIcon color="success" sx={{ fontSize: 50 }} />
          <Typography variant="h6" gutterBottom>
            Ticket Submitted Successfully!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Thank you for your submission. We will get back to you shortly.
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Reference No:{" "}
            <span style={{ color: "#2e7d32" }}>{referenceNo}</span>
          </Typography>
        </Stack>
      </Box>
    );
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          maxWidth: 400,
          width: "100%",
        }}
      >
        {view === "create" && <CreateTicketForm />}
        {view === "success" && (
          <SuccessfulTicketForm referenceNo="08011251035" />
        )}
      </Box>
    </Modal>
  );
}

export default TicketModal;
