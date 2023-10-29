import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{ background: "white", padding: 1, marginTop: "auto" }}
    >
      <Typography variant="body1">Copyright 2023</Typography>
    </Box>
  );
};
