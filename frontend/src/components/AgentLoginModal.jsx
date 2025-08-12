import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SecurityUpdateGoodIcon from "@mui/icons-material/SecurityUpdateGood";

function AgentLoginModal({
  open,
  handleClose,
  view = "login",
  onSubmit,
  submitError,
}) {
  // Local state for view inside modal
  const [openView, setOpenView] = useState(view);

  // Sync with parent changes
  useEffect(() => {
    setOpenView(view);
  }, [view]);

  const handleChangeView = (nextView) => setOpenView(nextView);

  const handleModalClose = () => {
    setOpenView("login"); // reset when closing
    handleClose();
  };

  function LoginForm() {
    return (
      <>
        <Form
          fields={[
            {
              label: "Username",
              name: "username",
              validators: ["required"],
              errorMessages: ["Username is required"],
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              validators: ["required"],
              errorMessages: ["Password is required"],
            },
          ]}
          title="Agent Login"
          hasClear
          submitLabel="Login"
        />
        <Button variant="text" onClick={() => handleChangeView("forgot")}>
          Forgot Password?
        </Button>
        <Button variant="text" onClick={() => handleChangeView("register")}>
          Register
        </Button>
      </>
    );
  }

  function RegisterForm() {
    return (
      <>
        <Form
          fields={[
            {
              label: "Username",
              name: "username",
              validators: ["required"],
              errorMessages: ["Username is required"],
            },
            {
              label: "Email",
              name: "email",
              validators: ["required", "isEmail"],
              errorMessages: ["Email is required", "Invalid email format"],
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              validators: ["required"],
              errorMessages: ["Password is required"],
            },
          ]}
          title="Agent Register"
          hasClear
          submitLabel="Register"
          onSubmit={onSubmit}
          submitError={submitError}
        />
        <Button variant="text" onClick={() => handleChangeView("login")}>
          Go back
        </Button>
      </>
    );
  }

  function SuccessfulRegisterForm() {
    return (
      <>
        <Box sx={{ textAlign: "center" }}>
          <HowToRegIcon
            sx={{
              backgroundColor: (theme) => theme.palette.success.light,
              borderRadius: "50%",
              padding: 1.5,
              fontSize: 50,
              color: (theme) => theme.palette.common.white,
            }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Registration successful! Please log in.
          </Typography>
          <Button variant="text" onClick={() => handleChangeView("login")}>
            Go back to Login
          </Button>
        </Box>
      </>
    );
  }

  function ForgotForm() {
    return (
      <>
        <Form
          fields={[
            {
              label: "Email",
              name: "email",
              validators: ["required", "isEmail"],
              errorMessages: ["Email is required", "Invalid email format"],
              type: "email",
            },
          ]}
          title="Forgot Password"
          submitLabel="Reset Password"
        />
        <Button variant="text" onClick={() => handleChangeView("login")}>
          Go back
        </Button>
      </>
    );
  }

  function CheckEmailForgotForm() {
    return (
      <>
        <Box sx={{ textAlign: "center" }}>
          <MarkEmailReadIcon
            sx={{
              backgroundColor: (theme) => theme.palette.success.light,
              borderRadius: "50%",
              padding: 1.5,
              fontSize: 50,
              color: (theme) => theme.palette.common.white,
            }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Check your email for the reset link.
          </Typography>
          <Button variant="text" onClick={() => handleChangeView("login")}>
            Go back to Login
          </Button>
        </Box>
      </>
    );
  }
  function ResetPasswordForgotForm() {
    return (
      <>
        <Form
          fields={[
            {
              label: "New Password",
              name: "newPassword",
              type: "password",
              validators: ["required"],
              errorMessages: ["New password is required"],
            },
            {
              label: "Confirm Password",
              name: "confirmPassword",
              type: "password",
              validators: ["required", "isPasswordMatch"],
              errorMessages: [
                "Confirm password is required",
                "Passwords do not match",
              ],
            },
          ]}
          title="New Password"
          submitLabel="Change Password"
        />
        <Button variant="text" onClick={() => handleChangeView("login")}>
          Go back to Login
        </Button>
      </>
    );
  }
  function SuccessfulForgotForm() {
    return (
      <>
        <Box sx={{ textAlign: "center" }}>
          <SecurityUpdateGoodIcon
            sx={{
              backgroundColor: (theme) => theme.palette.success.light,
              borderRadius: "50%",
              padding: 1.5,
              fontSize: 50,
              color: (theme) => theme.palette.common.white,
            }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Password reset successful!
          </Typography>
          <Button variant="text" onClick={() => handleChangeView("login")}>
            Go back to Login
          </Button>
        </Box>
      </>
    );
  }

  return (
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
        {openView === "login" && <LoginForm />}
        {openView === "register" && <RegisterForm />}
        {openView === "forgot" && <ForgotForm />}
        {openView === "checkEmailForgot" && <CheckEmailForgotForm />}
        {openView === "resetPasswordForgot" && <ResetPasswordForgotForm />}
        {openView === "successfulRegister" && <SuccessfulRegisterForm />}
        {openView === "successfulForgot" && <SuccessfulForgotForm />}
      </Box>
    </Modal>
  );
}

export default AgentLoginModal;
