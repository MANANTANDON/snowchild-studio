import { Typography } from "@mui/material";

export const Typographyone = ({ title, secondaryText }) => {
  return (
    <>
      <Typography className="font-bg" sx={{ fontSize: { xs: "16px" } }}>
        {title}
        {secondaryText && (
          <span
            style={{ color: "#666666", marginLeft: "10px" }}
            className="font-bg"
          >
            ({secondaryText})
          </span>
        )}
      </Typography>
    </>
  );
};
