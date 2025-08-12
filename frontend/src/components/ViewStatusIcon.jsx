// ViewStatusIcon.jsx
import React from "react";
import { Box } from "@mui/material";

function ViewStatusIcon(props) {
  return (
    <Box
      component="span"
      {...props}
      sx={{
        display: "inline-flex",
        gap: "4px",
        alignItems: "center",
        justifyContent: "center",
        height: "1em", // match icon size
        ...props.sx,
      }}
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: "0.4em",
            height: "0.4em",
            borderRadius: "50%",
            backgroundColor: "currentColor",
            animation: "dotPulse 1.2s infinite ease-in-out",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Keyframes once (injects global style) */}
      <style>
        {`
          @keyframes dotPulse {
            0%, 80%, 100% {
              transform: scale(0.5);
              opacity: 0.5;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
}

export default ViewStatusIcon;
