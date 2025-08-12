import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import Form from "./Form";

function ViewTicketModal({ open, handleClose, onSubmit }) {
  const fields = [
    {
      label: "Ticket Reference No.",
      name: "fullName",
      validators: ["required"],
      errorMessages: ["Ticket Reference No. is required"],
      placeholder: "e.g., 08011251035",
    },
  ];

  const handleSubmit = (data) => {
    onSubmit(data);
    handleClose();
  };

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
        <Form
          fields={fields}
          title="Ticket Details"
          onSubmit={handleSubmit}
          submitLabel="Send Ticket"
          hasClear
        />
      </Box>
    </Modal>
  );
}

export default ViewTicketModal;
