import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ scrollToForm, children }) => {
  return (
    <>
      <Box sx={{ m: { xs: 1, md: -1 } }}>
        <Header scrollToForm={scrollToForm} />
        {children}
        <Footer />
      </Box>
    </>
  );
};
