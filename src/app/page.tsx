import { Box, Container, Typography } from "@mui/material";
import MyCoolButton from "./components/MyCoolButton";
import MyFirstComponent from "./components/MyFirstComponent";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          MUI & Next.js Example
        </Typography>
        <MyFirstComponent />
        <MyCoolButton />
      </Box>
    </Container>
  );
}
