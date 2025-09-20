import { InputBase } from "@mui/material";
import React from "react";

export const CustomInputBase = ({
  placeholder,
  multiline = false,
  rows = 1,
  maxLength,
  ...props
}) => {
  return (
    <InputBase
      className="sf-pro-display-regular"
      sx={{
        border: "1px solid #ebebeb",
        borderRadius: "5px",
        px: "10px",
        py: "5px",
        mt: 1,
      }}
      placeholder={placeholder}
      fullWidth
      multiline={multiline}
      rows={rows}
      inputProps={{ maxLength }}
      {...props}
    />
  );
};
