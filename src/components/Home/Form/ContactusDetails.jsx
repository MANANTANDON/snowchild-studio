import { Box, Typography } from "@mui/material";
import React from "react";

export const ContactusDetails = () => {
  return (
    <>
      <Typography
        className="sf-pro-display-bold"
        sx={{ fontSize: "32px", fontWeight: 700 }}
      >
        Talk to Us.
      </Typography>
      <Box sx={{ my: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: { xs: "20px", md: "22px" },
            color: "#666666",
          }}
          className="sf-pro-display-regular"
        >
          <span
            style={{ color: "#171717" }}
            className="sf-pro-display-semibold"
          >
            Get a Custom Demo.
          </span>{" "}
          Discover how we can build the perfect digital platform tailored to
          your business needs and goals
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: { xs: "20px", md: "22px" },
            color: "#666666",
          }}
          className="sf-pro-display-regular"
        >
          <span
            style={{ color: "#171717" }}
            className="sf-pro-display-semibold"
          >
            Book a Call.
          </span>{" "}
          Let's discuss your vision and explore how we build the web your way
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: { xs: "20px", md: "22px" },
            color: "#666666",
          }}
          className="sf-pro-display-regular"
        >
          <span
            style={{ color: "#171717" }}
            className="sf-pro-display-semibold"
          >
            Start Your Project.
          </span>{" "}
          Ready to transform your ideas into a powerful digital experience?
          We're here to make it happen
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: { xs: "20px", md: "22px" },
            color: "#666666",
          }}
          className="sf-pro-display-regular"
        >
          <span
            style={{ color: "#171717" }}
            className="sf-pro-display-semibold"
          >
            Get Expert Advice.
          </span>{" "}
          From concept to launch, our team provides strategic guidance to ensure
          your web presence stands out
        </Typography>
      </Box>
    </>
  );
};
