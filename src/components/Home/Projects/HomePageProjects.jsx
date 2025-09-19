import { PROJECTS } from "@/constant";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const HomePageProjects = () => {
  return (
    <>
      <Box>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            src={"/images/line.png"}
            height={20}
            width={600}
            layout="intrinsic"
          />
          {/* First Grid */}
          <Grid container sx={{ width: "100%", mt: 2 }}>
            <Grid
              item
              size={6}
              sx={{
                borderRight: "2px solid",
                borderImage: `linear-gradient(to bottom, ${PROJECTS[0].color} 90%, ${PROJECTS[1].color} 100%) 1`,
                height: "300px",
                display: "flex",
                flexDirection: "row-reverse",
                px: 2,
              }}
              className="font-bg"
            >
              <Typography
                component={"a"}
                href={PROJECTS[0].link}
                sx={{
                  bgcolor: `${PROJECTS[0].color}20`,
                  height: "fit-content",
                  color: PROJECTS[0].color,
                  fontWeight: 600,
                  fontSize: "20px",
                  px: 3,
                  py: 0.7,
                  borderRadius: "12px",
                }}
              >
                {PROJECTS[0]?.name}
              </Typography>
            </Grid>

            <Grid
              item
              size={6}
              sx={{
                borderLeft: "2px solid",
                borderImage: `linear-gradient(to bottom, ${PROJECTS[0].color} 90%, ${PROJECTS[1].color} 100%) 1`,
                height: "300px",
                px: 2,
              }}
              className="font-bg"
            >
              <Image
                src={PROJECTS[0].img}
                height={267}
                width={450}
                layout="intrinsic"
              />
            </Grid>
          </Grid>
          {/* Second Grid */}
          <Grid container sx={{ width: "100%" }}>
            <Grid
              item
              size={6}
              sx={{
                borderRight: "2px solid",
                borderImage: `linear-gradient(to bottom, ${PROJECTS[1].color} 90%, ${PROJECTS[2].color} 100%) 1`,
                height: "300px",
                px: 2,
              }}
              className="font-bg"
            >
              <Image
                src={PROJECTS[1].img}
                height={267}
                width={450}
                layout="intrinsic"
              />
            </Grid>
            <Grid
              item
              size={6}
              sx={{
                borderLeft: "2px solid",
                borderImage: `linear-gradient(to bottom, ${PROJECTS[1].color} 90%, ${PROJECTS[2].color} 100%) 1`,
                height: "300px",
                display: "flex",
                flexDirection: "row",
                px: 2,
              }}
              className="font-bg"
            >
              <Typography
                component={"a"}
                href={PROJECTS[1].link}
                sx={{
                  bgcolor: `${PROJECTS[1].color}20`,
                  height: "fit-content",
                  color: PROJECTS[1].color,
                  fontWeight: 600,
                  fontSize: "20px",
                  px: 3,
                  py: 0.7,
                  borderRadius: "12px",
                }}
              >
                {PROJECTS[1]?.name}
              </Typography>
            </Grid>
          </Grid>
          {/*Third Grid*/}
          <Grid container sx={{ width: "100%" }}>
            <Grid
              item
              size={6}
              sx={{
                borderRight: "2px solid",
                borderImage: `linear-gradient(to bottom, ${PROJECTS[2].color} 90%, ${PROJECTS[3].color} 100%) 1`,
                height: "300px",
                display: "flex",
                flexDirection: "row-reverse",
                px: 2,
              }}
              className="font-bg"
            >
              <Typography
                component={"a"}
                href={PROJECTS[2].link}
                sx={{
                  bgcolor: `${PROJECTS[2].color}20`,
                  height: "fit-content",
                  color: PROJECTS[2].color,
                  fontWeight: 600,
                  fontSize: "20px",
                  px: 3,
                  py: 0.7,
                  borderRadius: "12px",
                }}
              >
                {PROJECTS[2]?.name}
              </Typography>
            </Grid>

            <Grid
              item
              size={6}
              sx={{
                borderLeft: "2px solid",
                borderImage: `linear-gradient(to bottom, ${PROJECTS[2].color} 90%, ${PROJECTS[3].color} 100%) 1`,
                height: "300px",
                px: 2,
              }}
              className="font-bg"
            >
              <Image
                src={PROJECTS[2].img}
                height={267}
                width={450}
                layout="intrinsic"
              />
            </Grid>
          </Grid>
          {/* Fourth Grid */}
          <Grid container sx={{ width: "100%" }}>
            <Grid
              item
              size={6}
              sx={{
                borderRight: "2px solid",
                borderImage: `linear-gradient(to bottom, ${PROJECTS[3].color} 90%, ${PROJECTS[3].color} 100%) 1`,
                height: "300px",
                px: 2,
              }}
              className="font-bg"
            >
              <Image
                src={PROJECTS[3].img}
                height={267}
                width={450}
                layout="intrinsic"
              />
            </Grid>
            <Grid
              item
              size={6}
              sx={{
                borderLeft: "2px solid",
                borderImage: `linear-gradient(to bottom, ${PROJECTS[3].color} 90%, ${PROJECTS[3].color} 100%) 1`,
                height: "300px",
                display: "flex",
                flexDirection: "row",
                px: 2,
              }}
              className="font-bg"
            >
              <Typography
                component={"a"}
                href={PROJECTS[3].link}
                sx={{
                  bgcolor: `${PROJECTS[3].color}20`,
                  height: "fit-content",
                  color: PROJECTS[3].color,
                  fontWeight: 600,
                  fontSize: "20px",
                  px: 3,
                  py: 0.7,
                  borderRadius: "12px",
                }}
              >
                {PROJECTS[3]?.name}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
