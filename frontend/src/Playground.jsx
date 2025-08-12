import React from "react";
import Button from "@mui/material/Button";
import AgentLoginModal from "./components/AgentLoginModal";
import AdminLoginModal from "./components/AdminLoginModal";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function Playground() {
  const [openAgentLogin, setOpenAgentLogin] = useState(false);
  const [openAdminLogin, setOpenAdminLogin] = useState(false);
  const handleCloseAdminLogin = () => setOpenAdminLogin(false);
  const handleOpenAdminLogin = () => setOpenAdminLogin(true);
  const handleFormSubmitAdminLogin = (data) => {
    console.log("Form submitted:", data);
  };
  const handleCloseAgentLogin = () => setOpenAgentLogin(false);
  const handleOpenAgentLogin = () => setOpenAgentLogin(true);

  const handleFormSubmitAgentLogin = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <Button onClick={handleOpenAgentLogin}> Click Me</Button>
      <AgentLoginModal
        open={openAgentLogin}
        handleClose={handleCloseAgentLogin}
        onSubmit={handleFormSubmitAgentLogin}
      />
      <Button onClick={handleOpenAdminLogin}> Open Admin Login</Button>
      <AdminLoginModal
        open={openAdminLogin}
        handleClose={handleCloseAdminLogin}
        onLoginSubmit={handleFormSubmitAdminLogin}
      />
    </>
  );
}
