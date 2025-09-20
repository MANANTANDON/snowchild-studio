import { ChevronRightRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export const ProjectsNotification = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        mb: 2,
        mt: 1,
      }}
    >
      <Box
        sx={{
          color: "#0060F2",
          bgcolor: "#EAF4FF",
          px: 1.5,
          py: 0.5,
          borderRadius: "20px",
        }}
        className="sf-pro-display-medium"
      >
        New
      </Box>
      <Typography className="sf-pro-display-light" textAlign={"center"}>
        Join Snowchild Studio to enhance your web experience
      </Typography>
      <Button
        onClick={handleContactClick}
        sx={{
          textTransform: "none",
          color: "#FFFFFF",
          bgcolor: "#171717",
          fontSize: "14px",
          borderRadius: "20px",
          px: 2,
        }}
        className="sf-pro-display-regular"
        endIcon={<ChevronRightRounded />}
      >
        Contact us
      </Button>
    </Box>
  );
};
