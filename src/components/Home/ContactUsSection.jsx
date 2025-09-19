import { Box, Container } from "@mui/material";
import React from "react";
import { ContactUsGrid } from "./Form/ContactUsGrid";
import { ContactusForm } from "./Form/ContactusForm";

export const ContactUsSection = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          overflow: "hidden",
          border: "1px solid #EBEBEB",
        }}
      >
        <Box
          sx={{
            color: "transparent",
            pointerEvents: "none",
            mx: -3,
          }}
        >
          4d616e616e
        </Box>
        <ContactUsGrid />
        <ContactusForm />
      </Container>
    </>
  );
};
