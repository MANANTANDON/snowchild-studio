import { Box, Container } from "@mui/material";
import React from "react";
import { ProjectTopCont } from "./Projects/ProjectsTopCont";

export const ProjectsSection = () => {
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
            borderBottom: "1px solid #EBEBEB",
            color: "transparent",
            pointerEvents: "none",
            mx: -3,
          }}
        >
          4d616e616e
        </Box>
        <ProjectTopCont />
      </Container>
    </>
  );
};
