import { Box, Grid } from "@mui/material";
import React from "react";
import { TheForm } from "./TheForm";
import { ContactusDetails } from "./ContactusDetails";

export const ContactusForm = () => {
  return (
    <>
      <Box sx={{ mx: -3 }}>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: "26px" }}>
            <ContactusDetails />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              bgcolor: "#FFFFFF",
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
