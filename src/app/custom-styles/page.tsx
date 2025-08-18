"use client";
import { Box, Button, createTheme, Paper, Slider, styled, ThemeProvider, Typography } from "@mui/material";
import { deepOrange, lightGreen, yellow } from "@mui/material/colors";
import styles from "./page.module.css";

const Page = () => {
  const StyledButton = styled(Button)(() => ({
    bgcolor: deepOrange[500],
    textTransform: "none",
    fontSize: "1.5rem",
    borderRadius: "8px",
    "&:hover": { bgcolor: deepOrange[600] },
  }));

  const palletTHeme = createTheme({
    palette: {
      primary: deepOrange,
      //   secondary: {
      //     main: yellow[700],
      //     dark: yellow[900],
      //     contrastText: yellow[50],
      //   },
      secondary: lightGreen,
    },
  });

  const theme = createTheme({
    palette: {
      primary: deepOrange,
      secondary: {
        main: yellow[700],
        dark: yellow[900],
        contrastText: yellow[50],
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "red",
            padding: "14px",
            borderRadius: "8px",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            width: "100%",
            color: "white",
            backgroundColor: deepOrange[500],
            "&:hover": {
              backgroundColor: deepOrange[600],
            },
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "8px",
          },
        },
      },
    },
  });

  return (
    <>
      <Box m={2} py={8} gap={2} display="flex" flexDirection="column">
        <Typography variant="h1">1 Component Props</Typography>
        <Typography variant="h2">Buttons</Typography>
        <Box display="flex" gap={2}>
          <Button variant="contained" size="large">
            Click me
          </Button>
          <Button variant="contained" size="large" disableRipple>
            Ripple Disabled
          </Button>
          <Button variant="contained" size="large" disableRipple disableElevation>
            Elevation Disabled
          </Button>
          <Button variant="outlined" size="large">
            Outline
          </Button>
          <Button variant="outlined" size="large">
            Sharp Edges
          </Button>
        </Box>
        <Typography variant="h2">Page</Typography>
        <Box display="flex" gap={2}>
          <Paper sx={{ height: "200px", width: "120px" }} elevation={10} variant="outlined" square></Paper>
        </Box>

        <Typography variant="h1">2 sx Props</Typography>
        <Button
          variant="contained"
          size="large"
          disableRipple
          disableElevation
          sx={{
            bgcolor: deepOrange[500],
            textTransform: "none",
            fontSize: "1.5rem",
            borderRadius: "8px",
            "&:hover": { bgcolor: deepOrange[600] },
          }}
        >
          Click Me
        </Button>

        <Typography variant="h1">3 Styled Function</Typography>
        <StyledButton variant="contained" size="large">
          Styled Button
        </StyledButton>

        <Typography variant="h1">4 Normal CSS Files</Typography>

        <Typography variant="h1">5 CSS Modules</Typography>
        <Button className={styles["demo-button"]}>CSS Modules</Button>

        <ThemeProvider theme={theme}>
          <Typography variant="h1">6 Theme</Typography>
          <Button variant="contained" size="large">
            Click Me
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={palletTHeme}>
          <Typography variant="h3">Theme Palets</Typography>
          <Paper sx={{ width: "200px" }}>
            <Typography variant="h5">Lorem ipsum dolor sit</Typography>
            <Button variant="contained" size="large" color="secondary">
              Click Me
            </Button>
            <Button
              variant="contained"
              sx={{
                border: "3px solid",
                borderColor: "secondary.main",
              }}
            >
              Click Me
            </Button>
          </Paper>
        </ThemeProvider>
        <Typography variant="h1">7 Complex Components</Typography>
        <Slider
          sx={{
            ".MuiSlider-thumb": { bgcolor: "red" },
            ".MuiSlider-track": { bgcolor: "blue" },
            ".MuiSlider-rail": { bgcolor: "green" },
            ".MuiSlider-thumb.Mui-active": { bgcolor: "yellow" },
            ".MuiSlider-thumb.Mui-focusVisible": { border: "2px solid orange" },
          }}
        />
      </Box>
    </>
  );
};

export default Page;
