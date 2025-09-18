import { Container } from "@mui/material";
import React from "react";
import { HeroEdges } from "./Hero/HeroEdges";
import { HeroContent } from "./Hero/HeroContent";
import { HeroBackground } from "./Hero/HeroBackground";
import { HeroGradient } from "./Hero/HeroGradient";

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
