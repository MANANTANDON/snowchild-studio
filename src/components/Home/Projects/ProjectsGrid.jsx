import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProjectsGrid = () => {
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
            border: "0.5px solid #EBEBEB",
            borderLeft: key === 0 && "none",
            borderRight: { xs: key === 7 && "none", sm: key === 11 && "none" },
          }}
        />
      ))}
    </>
  );

  return (
    <>
      <Box sx={{ mx: { xs: -2, sm: -3 }, border: "1px solid #EBEBEB" }}>
        <Grid container sx={{ position: "relative" }}>
          <Typography
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
              zIndex: 2,
              color: "#666666",
            }}
            className="sf-pro-display-medium"
          >
            {">_ cd projects"}
          </Typography>
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
                src={"/images/projects1.png"}
                layout="intrinsic"
                height={127}
                width={378}
              />
            </Box>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                color: "#ebebeb",
                transform: "translate(-50%, -50%)",
                fontSize: {
                  xs: "26px",
                  sm: "50px",
                  md: "60px",
                },
                whiteSpace: "nowrap",
                fontWeight: "600",
              }}
              className="sf-pro-display-bold"
            >
              Projects.
            </Typography>
          </Box>
          {isMobile && AllGrids}
          {isMobile && AllGrids}
        </Grid>
      </Box>
    </>
  );
};
