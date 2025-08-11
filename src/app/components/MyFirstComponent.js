"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const MyFirstComponent = () => {
  return (
    <Box
      sx={{
        padding: 3,
        border: "1px dashed grey",
        borderRadius: 1,
      }}
    >
      <Typography variant="h1" gutterBottom>
        This is my first MUI component
      </Typography>
      <Typography paragraph>It includes a button styled with the theme we created.</Typography>
      <Button variant="contained" color="primary" onClick={() => alert}>
        Click me
      </Button>
    </Box>
  );
};

export default MyFirstComponent;
