import { Box, Grid } from "@mui/material";
import React from "react";
import { TheForm } from "./TheForm";
import { ContactusDetails } from "./ContactusDetails";

export const ContactusForm = () => {
  return (
    <>
      <Box sx={{ mx: -3, position: "relative" }}>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: "26px" }}>
            <ContactusDetails />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              bgcolor: "#FFFFFF",
              borderTop: { xs: "1px solid #ebebeb", md: "none" },
              borderLeft: "1px solid #ebebeb",
              p: "26px",
            }}
          >
            <TheForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
