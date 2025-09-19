import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ m: { xs: 1, md: -1 } }}>
        <Header />
        {children}
        <Footer />
      </Box>
    </>
  );
};
