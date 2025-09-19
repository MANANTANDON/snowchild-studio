import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ContactUsGrid = () => {
  const isLaptop = useMediaQuery("(max-width:768px)");
  const isMobile = useMediaQuery("(max-width: 500px)");
  const gridCount = isLaptop ? 8 : 12;

  const AllGrids = (
    <>
      {Array.from(Array(gridCount)).map((item, key) => (
        <Grid
          size={{ xs: 1.5, md: 1 }}
          sx={{
            height: { xs: "45px", sm: "90px" },
            border: "1px solid #EBEBEB",
            borderLeft: key === 0 && "none",
            borderRight: { xs: key === 7 && "none", sm: key === 11 && "none" },
          }}
        />
      ))}
    </>
  );

  return (
    <>
      <Box sx={{ mx: { xs: -3 }, border: "1px solid #EBEBEB" }}>
        <Grid container sx={{ position: "relative" }}>
          {AllGrids}
          {AllGrids}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image
                src={"/images/contactus.png"}
                layout="intrinsic"
                height={143}
                width={450}
              />
            </Box>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: {
                  xs: "26px",
                  sm: "50px",
                  md: "60px",
                },
                whiteSpace: "nowrap",
                fontWeight: "600",
              }}
              className="font-bg"
            >
              Contact Us.
            </Typography>
          </Box>
          {isMobile && AllGrids}
        </Grid>
      </Box>
    </>
  );
};
