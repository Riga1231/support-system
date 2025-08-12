import React from "react";
import SendIcon from "@mui/icons-material/Send";

function SubmitTicketIcon(props) {
  return (
    <SendIcon
      {...props} // Allow style/sx to be passed from parent
      sx={{
        animation: "fly 1.2s ease-in-out infinite",
        fontSize: props.fontSize || 100,
        "@keyframes fly": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(8px)" },
          "100%": { transform: "translateX(0)" },
        },
        ...props.sx,
      }}
    />
  );
}

export default SubmitTicketIcon;
