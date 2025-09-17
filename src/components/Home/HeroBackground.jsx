import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";

export const HeroBackground = () => {
  const isLaptop = useMediaQuery("(max-width:768px)");
  const gridCount = isLaptop ? 8 : 12;

  const AllGrids = (
    <>
      {Array.from(Array(gridCount)).map((item, key) => (
        <Grid
          size={{ xs: 1.5, md: 1 }}
          sx={{
            height: { xs: "50px", sm: "90px" },
            border: "1px solid #EBEBEB",
          }}
        />
      ))}
    </>
  );

  const SkippedGrids = (
    <>
      {Array.from(Array(gridCount)).map((item, key) => (
        <Grid
          size={{ xs: 1.5, md: 1 }}
          sx={{
            height: { xs: "50px", sm: "90px" },
            border: {
              xs: "none",
              md: (key === 0 || key === 11) && "1px solid #EBEBEB",
            },
          }}
        />
      ))}
    </>
  );
  return (
    <>
      <Box sx={{ mx: { xs: -3 }, border: "1px solid #EBEBEB" }}>
        <Grid container>
          {Array.from(Array(gridCount)).map((item, key) => (
            <Grid
              size={{ xs: 1.5, sm: 1.5, md: 1 }}
              sx={{
                height: { xs: "50px", sm: "90px" },
                border: { xs: "none", md: "1px solid #EBEBEB" },
              }}
            />
          ))}
          {SkippedGrids}
          {SkippedGrids}
          {SkippedGrids}
          {SkippedGrids}

          {AllGrids}
          {AllGrids}
          {AllGrids}
        </Grid>
      </Box>
    </>
  );
};
