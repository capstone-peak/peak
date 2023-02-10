import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import Navbar from "../comps/Navbar";
import { createTheme } from "@material-ui/core/styles";
import CaloriesBar from "../CalorieTrackerComponents/caloriesBar";
import MealContainer from "../CalorieTrackerComponents/meals";
import DashboardComponents from "../CalorieTrackerComponents/dashboardComponents";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
  text: {
    primary: "#ffffff",
    secondary: "#aaa",
  },
  background: { default: "#161616" },
});

const mdTheme = createTheme();

function CaloriesContent() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Navbar />

        <Container
          sx={{
            display: "flex",
            flexFlow: "column",
            width: "97.5%",
            height: "100vh",
          }}
        >
          <Grid>
            <Box
              sx={{
                display: "flex",
                flexFlow: "column",
                margin: "2rem 0",
                borderRadius: "10px",
                backgroundColor: "#262626",
                flexGrow: 1,
                marginLeft: "7rem",
                marginRight: "7rem",
              }}
            >
              <Box component="main">
                <div
                  style={{
                    display: "flex",
                    paddingTop: "0px",
                    marginTop: "5px",
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{
                      color: "#FFFFFF",
                      paddingTop: "2rem",
                      fontFamily: "Montserrat, sans serif",
                      fontSize: "38px",
                      fontWeight: 700,
                      paddingLeft: "1.5rem",
                    }}
                  >
                    CALORIE TRACKER
                  </Typography>
                </div>

                <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
                  <Grid
                    container
                    spacing={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      overflowX: "hidden",
                      overflowY: "auto",
                      "&::-webkit-scrollbar": {
                        width: "15px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#161616",
                        borderRadius: "10px",
                      },
                      alignItems: "center",
                      borderRadius: "10px",
                      height: "800px",
                    }}
                  >
                    <Grid item xs={12}>
                      <Paper
                        style={{
                          backgroundColor: "#202020",
                          paddingBottom: "1rem",
                        }}
                      >
                        <MealContainer />
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default function Calories() {
  const { isLoading, session } = useSessionContext();

  useEffect(() => {}, [isLoading]);

  if (session && !isLoading) {
    return (
      <>
        <Head>
          <title>Calorie Tracker</title>
        </Head>
        <CaloriesContent />
      </>
    );
  } else if (!session && !isLoading) {
    return (
      <>
        <Head>
          <title>Calorie Tracker</title>
        </Head>
        <Navbar />
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}
        >
          <Box
            sx={{
              width: "80rem",
              height: "20rem",
              marginTop: "15vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#242424",
              borderRadius: "8px",
              boxShadow: "0px 10px 10px rgba(0,0,0,0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#E8E8E8", textAlign: "center" }}
            >
              You need an account to access this page
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Link
                href="auth/login"
                style={{
                  padding: "10px",
                  color: "#E8E8E8",
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(#161616, #161616) padding-box, linear-gradient(to right,#da6b03, #b59500, #89b33e, #56ca82, #03dac5) border-box",
                    border: "2px solid transparent",
                    padding: "1rem 1rem 1rem 1rem",
                  }}
                >
                  Sign Into Your Account
                </Button>
              </Link>
              <Link
                href="auth/signup"
                style={{
                  padding: "10px",
                  color: "#E8E8E8",
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(#161616, #161616) padding-box, linear-gradient(to right,#da6b03, #b59500, #89b33e, #56ca82, #03dac5) border-box",
                    border: "2px solid transparent",
                    padding: "1rem 1rem 1rem 1rem",
                  }}
                >
                  Create A New Account
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </>
    );
  }
}
