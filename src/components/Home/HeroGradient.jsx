import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const HeroGradient = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: 0,
          right: 0,
          height: { xs: "332px", sm: "632px" },
          width: "100%",
        }}
      >
        <Image
          src={"/images/gradient.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          unoptimized={true}
        />
      </Box>
    </>
  );
};
