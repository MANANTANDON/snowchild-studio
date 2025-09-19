import { Box, Typography } from "@mui/material";
import React from "react";

export const ContactusDetails = () => {
  return (
    <>
      <Typography
        className="font-bg"
        sx={{ fontSize: "32px", fontWeight: 700 }}
      >
        Talk to Us.
      </Typography>
      <Box sx={{ my: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: { xs: "20px", md: "22px" },
            color: "#666666",
          }}
          className="font-bg"
        >
          <span style={{ fontWeight: 600, color: "#171717" }}>
            Get a Custom Demo.
          </span>{" "}
          Discover the value of Snowchild Studio for your enterprise and explore
          our custom plans
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: { xs: "20px", md: "22px" },
            color: "#666666",
          }}
          className="font-bg"
        >
          <span style={{ fontWeight: 600, color: "#171717" }}>
            Book a Call.
          </span>{" "}
          See for yourself how Snowchild Studio enhances your design
        </Typography>
      </Box>
    </>
  );
};
