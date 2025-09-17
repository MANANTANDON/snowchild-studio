import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ m: { xs: 0, sm: -1 } }}>
        <Header />
        {children}
      </Box>
    </>
  );
};
