import { Box, Container, Typography } from "@mui/material";

const FirstPage = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="button"
        sx={{
          width: "fit-content",
          bgcolor: "darkgray",
          py: 2,
          px: 6,
          color: "white",
          borderRadius: "8px",
          fontSize: "2rem",
          ":hover": {
            bgcolor: "black",
          },
        }}
      >
        Click Me
      </Typography>
      <Typography variant="h1">First Page</Typography>
      <Box
        sx={{
          width: {
            xs: 1,
            md: 200,
          },
          height: 200,
          bgcolor: "tomato",
        }}
      ></Box>
    </Container>
  );
};

export default FirstPage;
