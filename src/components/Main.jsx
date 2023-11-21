import React from "react";
import Client from "./Client";
import { Box, Container } from "@mui/material";

function Main() {
  return (
    <Box component={"main"} sx={{ padding: 3 }}>
      <Container maxWidth="lg">
        <Client />
      </Container>
    </Box>
  );
}
export default Main;
