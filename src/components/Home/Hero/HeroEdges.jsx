import { Box } from "@mui/material";
import React from "react";

export const HeroEdges = () => {
  const corners = [
    { top: 0, left: 0, borderRight: "none", borderBottom: "none" },
    { top: 0, right: 0, borderLeft: "none", borderBottom: "none" },
    { bottom: 0, left: 0, borderRight: "none", borderTop: "none" },
    { bottom: 0, right: 0, borderLeft: "none", borderTop: "none" },
  ];

  const baseStyle = {
    position: "absolute",
    height: "15px",
    width: "15px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "black",
  };

  return (
    <>
      {corners.map((corner, index) => (
        <Box key={index} sx={{ ...baseStyle, ...corner }} />
      ))}
    </>
  );
};
