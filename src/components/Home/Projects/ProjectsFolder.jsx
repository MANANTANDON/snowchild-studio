import { PROJECTS } from "@/constant";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsNotification } from "./ProjectsNotification";
import { ArrowRightAltRounded, ArrowRightRounded } from "@mui/icons-material";

export const ProjectsFolder = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProjectsNotification />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <ProjectsGrid />
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          overflow: "hidden",
          border: "1px solid #EBEBEB",
          borderTop: "none",
          mb: 5,
        }}
      >
        <Box sx={{ mx: -3 }}>
          <Grid container>
            {PROJECTS?.map((item, key) => (
              <Grid
                key={key}
                size={{ xs: 12, md: 4 }}
                sx={{ p: 3 }}
                ref={(el) => (itemRefs.current[key] = el)}
                data-index={key}
              >
                <Box
                  sx={{
                    transform: visibleItems.has(key)
                      ? "translateY(0px)"
                      : "translateY(50px)",
                    opacity: visibleItems.has(key) ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    transitionDelay: `${key * 0.1}s`,
                  }}
                >
                  <a href={item.link} target="_blank">
                    <Image
                      src={item.img}
                      layout="intrinsic"
                      height={324}
                      width={504}
                      alt={`Project ${key + 1}`}
                    />
                  </a>
                  <Box sx={{ mx: 2 }}>
                    <Typography
                      sx={{
                        bgcolor: "#EBEBEB",
                        border: "1px solid #D3D3D3",
                        width: "fit-content",
                        color: "#171717",
                        borderRadius: "5px",
                        px: "10px",
                        mt: 1.5,
                      }}
                      className="sf-pro-display-semibold"
                    >
                      {item?.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#171717",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        my: 1.5,
                        color: "#666666",
                      }}
                      className="sf-pro-display-regular"
                    >
                      {item?.description}
                    </Typography>
                    <a href={item.link} target="_blank">
                      <IconButton
                        sx={{ bgcolor: "#FFFFFF", border: "1px solid #ebebeb" }}
                      >
                        <ArrowRightAltRounded />
                      </IconButton>
                    </a>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
