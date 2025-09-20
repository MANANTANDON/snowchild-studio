import { Instagram, X, YouTube } from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 2 },
          px: { xs: 1, md: 2 },
          py: 4,
          bgcolor: "#fafafa",
          borderTop: "1px solid #EDEDED",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box
            component={"a"}
            href="/"
            sx={{
              display: "flex",
              alignItems: { xs: "center", md: "baseline" },
              gap: 2,
            }}
          >
            <Image
              src={"/images/studiologo.png"}
              height={isMobile ? 50 : 100}
              width={isMobile ? 50 : 100}
              layout="intrinsic"
              style={{ borderRadius: "12px" }}
            />
            <Typography
              className="sf-pro-display-bold"
              sx={{ fontSize: { xs: "28px", md: "60px" } }}
            >
              Snowchild Studio
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <YouTube />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <X />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "flex-start", md: "center" },
          }}
        >
          <Typography
            className="sf-pro-display-regular"
            component={"a"}
            href="/"
            sx={{ color: "#666666", fontSize: "14px" }}
          >
            Terms & Condition •
          </Typography>

          <Typography
            className="sf-pro-display-regular"
            component={"a"}
            href="/"
            sx={{ color: "#666666", fontSize: "14px", ml: 0.5 }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </>
  );
};
