import Form from "./Form";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function AdminLoginModal({ open, handleClose, onLoginSubmit }) {
  const handleModalClose = () => {
    handleClose();
  };
  return (
    <div>
      <Modal open={open} onClose={handleModalClose}>
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

            width: "400px",
          }}
        >
          <Form
            fields={[
              {
                label: "PIN",
                name: "pin",
                validators: ["required"],
                errorMessages: ["PIN is required"],
                type: "number",
                maxDigits: 5,
              },
            ]}
            title="Admin Login"
            hasClear
            submitLabel="Login"
            onSubmit={onLoginSubmit}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default AdminLoginModal;
