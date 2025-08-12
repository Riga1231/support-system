import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import React, { useRef } from "react";

function AiChat({ messages, onSendMessage }) {
  const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <Box
      sx={{
        height: 250, // ✅ Fixed height prevents outside layout shift
        width: "100%",
        position: "relative",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: "10px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Chat History (scrollable area) */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            pr: 1,
          }}
        >
          {/* Replace with dynamic messages */}
          <Box
            sx={{
              alignSelf: "flex-start",
              backgroundColor: "primary.main",
              padding: "10px",
              borderRadius: "5px",
              width: "fit-content",
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>
              User: Hello, how can I reset my password?
            </Typography>
          </Box>
        </Box>

        {/* Input Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            gap: 1,
            pt: 1,
          }}
        >
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {/* Attach Button */}
          <Button
            sx={{
              minWidth: 40,
              width: 40,
              height: 40,
              padding: 0,
              borderRadius: "50%",
              backgroundColor: "transparent",
            }}
            onClick={handleButtonClick}
          >
            <AttachFileIcon fontSize="medium" />
          </Button>

          {/* Text Input */}
          <TextField
            variant="filled"
            placeholder="Type your message here..."
            hiddenLabel
            fullWidth
            multiline
            maxRows={4}
            InputProps={{
              disableUnderline: true,
              sx: {
                overflow: "auto", // ✅ Scrolls inside
                paddingY: "5px",
              },
            }}
            sx={{
              "& .MuiFilledInput-root": {
                borderRadius: "20px",
                backgroundColor: "#f5f5f5",
                paddingLeft: 2,
                alignItems: "flex-start",
              },
            }}
          />

          {/* Send Button */}
          <Button
            sx={{
              minWidth: 40,
              width: 40,
              height: 40,
              padding: 0,
              borderRadius: "50%",
              backgroundColor: "transparent",
            }}
          >
            <SendIcon fontSize="medium" />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default AiChat;
