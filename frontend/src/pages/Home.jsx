import React from "react";
import LandingCard from "../components/LandingCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import AiChat from "../components/AiChat";
import Typography from "@mui/material/Typography";
import SubmitTicketIcon from "../components/SubmitTicketIcon";
import ViewStatusIcon from "../components/ViewStatusIcon";
import TicketModal from "../components/TicketModal";
import AgentLoginModal from "../components/AgentLoginModal";
import AdminLoginModal from "../components/AdminLoginModal";
import ViewTicketModal from "../components/ViewTicketModal";
import { useState } from "react";
import { use } from "react";
function Home() {
  const [openTicket, setOpenTicket] = useState(false);
  const handleCloseTicket = () => setOpenTicket(false);
  const handleOpenTicket = () => setOpenTicket(true);

  const [openAgentLogin, setOpenAgentLogin] = useState(false);
  const handleCloseAgentLogin = () => setOpenAgentLogin(false);
  const handleOpenAgentLogin = () => setOpenAgentLogin(true);
  const [agentView, setAgentView] = useState();
  const [agentError, setAgentError] = useState();

  const [openAdminLogin, setOpenAdminLogin] = useState(false);
  const handleCloseAdminLogin = () => setOpenAdminLogin(false);
  const handleOpenAdminLogin = () => setOpenAdminLogin(true);

  const [openViewTicket, setOpenViewTicket] = useState(false);
  const handleCloseViewTicket = () => setOpenViewTicket(false);
  const handleOpenViewTicket = () => setOpenViewTicket(true);

  async function handleAgentRegister(data) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/agents`,
        {
          username: data.username,
          email: data.email,
          password: data.password,
        }
        // No third argument unless you want to set headers or config
      );

      // If successful, update the view
      setAgentView("successfulRegister");
    } catch (error) {
      console.log(error);
      if (error.response) {
        setAgentError(error.response.data.error);
      } else {
        setAgentError(error.message);
      }
    }
  }

  return (
    <div>
      <ViewTicketModal
        open={openViewTicket}
        handleClose={handleCloseViewTicket}
      />
      <AgentLoginModal
        open={openAgentLogin}
        handleClose={handleCloseAgentLogin}
        onSubmit={handleAgentRegister}
        submitError={agentError}
        view={agentView}
      />

      <AdminLoginModal
        open={openAdminLogin}
        handleClose={handleCloseAdminLogin}
      />

      <TicketModal open={openTicket} handleClose={handleCloseTicket} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 5,
            marginTop: 10,
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ flexGrow: 0, flexBasis: "40%", height: "500px" }}>
            <LandingCard
              Icon={SubmitTicketIcon}
              title="Need help?"
              description="Submit a support ticket and our team will get back to you shortly."
              buttonText="Submit Ticket"
              onButtonClick={handleOpenTicket}
            />
          </Box>
          <Box sx={{ flexGrow: 0, flexBasis: "40%", height: "500px" }}>
            <LandingCard
              Icon={ViewStatusIcon}
              title="Check your requests."
              description="View the status of your submitted tickets and track updates in real time."
              buttonText="View My Ticket"
              onButtonClick={handleOpenViewTicket}
            />
          </Box>
        </Box>
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ margin: "100px 0px" }}
        >
          Need immediate assistance? <br />
          Use our{" "}
          <Typography
            variant="h3"
            component="span"
            color="primary"
            fontWeight="bold"
          >
            AI ChatBot
          </Typography>{" "}
          for quick answers.
        </Typography>
        <AiChat />
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // align right
          gap: 4,
          px: 3,
          py: 2,
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          onClick={handleOpenAgentLogin}
          sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
        >
          Agent Login
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          onClick={handleOpenAdminLogin}
          sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
        >
          Admin Login
        </Typography>
      </Box>
    </div>
  );
}

export default Home;
