import { Typography } from "@mui/material";

export const Typographyone = ({ title, secondaryText }) => {
  return (
    <>
      <Typography
        className="sf-pro-display-bold"
        sx={{ fontSize: { xs: "16px" } }}
      >
        {title}
        {secondaryText && (
          <span
            style={{ color: "#666666", marginLeft: "10px" }}
            className="sf-pro-display-light"
          >
            ({secondaryText})
          </span>
        )}
      </Typography>
    </>
  );
};
