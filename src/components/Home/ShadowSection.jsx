import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ShadowSection = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          overflow: "hidden",
          height: { xs: "50px", md: "100px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "632px",
            overflow: "hidden",
            position: "absolute",
            top: { xs: -540, md: -520 },
            left: 0,
            transform: "rotate(180deg)",
          }}
        >
          <Image
            src={"/images/gradient.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Container>
    </>
  );
};
