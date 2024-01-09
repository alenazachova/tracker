import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box component={"footer"} sx={{ padding: 1, marginTop: "auto" }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} TimeTracker. All rights reserved.
      </Typography>
    </Box>
  );
};
