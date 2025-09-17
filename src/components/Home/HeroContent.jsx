import { ArrowOutwardRounded } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

export const HeroContent = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Reusable button styles
  const baseButtonStyle = {
    textTransform: "none",
    zIndex: 100,
    px: { xs: 2, sm: 5 },
    py: 1,
    borderRadius: "30px",
    fontSize: { xs: "14px", sm: "20px" },
    fontWeight: 500,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    },
  };

  const buttons = [
    {
      text: "Work with us",
      icon: <ArrowOutwardRounded />,
      variant: "primary",
      sx: {
        ...baseButtonStyle,
        bgcolor: "#171717",
        color: "#FFFFFF",
        border: "1px solid #171717",
        "&:hover": {
          ...baseButtonStyle["&:hover"],
          bgcolor: "#2a2a2a",
        },
      },
    },
    {
      text: "View Projects",
      variant: "secondary",
      sx: {
        ...baseButtonStyle,
        bgcolor: "#FFFFFF",
        color: "#171717",
        border: "1px solid #E6E6E6",
        "&:hover": {
          ...baseButtonStyle["&:hover"],
          bgcolor: "#f8f8f8",
          borderColor: "#d0d0d0",
        },
      },
    },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: { xs: "20px", sm: "80px", md: "130px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        px: 2,
      }}
    >
      {/* Hero Typography */}
      <Typography
        sx={{
          fontSize: { xs: "32px", sm: "48px", md: "48px", lg: "56px" },
          mt: { xs: 3, sm: 5 },
          lineHeight: 1.1,
        }}
        className="font-bg"
        component="div"
        textAlign="center"
      >
        <Typewriter
          options={{ delay: 70 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                isMobile
                  ? "Creative Collective<br/><strong>Snowchild Studio</strong>"
                  : "Creative Collective <strong>Snowchild Studio</strong>"
              )
              .start();
          }}
        />
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "26px", md: "26px" },
          color: "#444444",
          my: 3,
        }}
        className="font-bg"
      >
        We build 👨🏻‍💻 the web your way...
      </Typography>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1.5, sm: 2 },
          mb: 5,
          flexWrap: "wrap",
        }}
      >
        {buttons.map((button, index) => (
          <Button
            key={index}
            className="font-bg"
            sx={button.sx}
            endIcon={button.icon}
          >
            {button.text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
