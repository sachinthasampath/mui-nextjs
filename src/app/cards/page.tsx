import { Box, Button, Container, Paper, Typography } from "@mui/material";

const services = ["Service 1", "Service 2", "Service 3", "Service 4"];

const CardsPage = () => {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          my: 4,
          textAlign: "center",
          color: "primary.main",
        }}
      >
        Services
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {services.map((service) => (
          <Paper elevation={3} key={service}>
            <Box
              sx={{
                m: 3,
              }}
            >
              <Typography variant="h3">{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, quos.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default CardsPage;
