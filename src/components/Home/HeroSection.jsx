import { Container } from "@mui/material";
import React from "react";
import { HeroEdges } from "./HeroEdges";
import { HeroContent } from "./HeroContent";
import { HeroBackground } from "./HeroBackground";
import { HeroGradient } from "./HeroGradient";

export const HeroSection = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <HeroEdges />
        <HeroContent />
        <HeroBackground />
        <HeroGradient />
      </Container>
    </>
  );
};
