import { MenuRounded } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          height: "65px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #EDEDED",
          px: { xs: 0, sm: 4 },
        }}
        className="gradient-effect-two"
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Image
            src="/images/studiologo.png"
            height={32}
            width={32}
            alt="Snowchild Studio Logo"
            unoptimized={true}
            style={{ borderRadius: "5px" }}
          />
          <Typography
            className="font-bg"
            sx={{ fontWeight: 500, fontSize: { xs: "20px", md: "26px" } }}
          >
            Snowchild Studio
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          {["Projects", "About us"].map((item, key) => (
            <Typography
              className="font-bg"
              key={key}
              sx={{ fontSize: "14px", fontWeight: 400, color: "#666666" }}
              component={"a"}
              href="/"
            >
              {item}
            </Typography>
          ))}
          <Button
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#171717",
              textTransform: "none",
              borderRadius: "7px",
              border: "1px solid #e6e6e6",
              bgcolor: "#FFFFFF",
            }}
          >
            Contact us
          </Button>
        </Box>
        <IconButton
          sx={{ border: "1px solid #ebebeb", display: { sm: "none" } }}
        >
          <MenuRounded fontSize="small" />
        </IconButton>
      </Box>
    </>
  );
};
