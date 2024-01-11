import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box component={"footer"} sx={{ padding: 1, marginTop: "auto" }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} TimeTracker. All rights reserved.
      </Typography>
      <Link to={"/video"}>video</Link>
    </Box>
  );
};
