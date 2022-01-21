import React from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

//畫面
import AlbumCard from "./albumCard";
import TopSongs from "./topSongs";
import NewRelease from "./newRelease";
import RecentAlbums from "./recentAlbums";
import AudioBar from "./audioBar";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    position: "relative",
    flexGrow: 1,
    margin: "auto",
    paddingBottom: "65px",
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      paddingBottom: "0",
    },
  },
  container: {
    [theme.breakpoints.up("md")]: {
      margin: "2% 0",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  paper: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "transparent",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <AlbumCard />
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <TopSongs />
              <Hidden smDown>
                <NewRelease />
                <RecentAlbums />
              </Hidden>
            </Paper>
          </Grid>
          <Box
            sx={{
              position: "fixed",
              width: "100%",
              right: "0",
              left: "0",
              bottom: "0",
              [theme.breakpoints.up("md")]: {
                position: "absolute",
                zIndex: "tooltip",
              },
            }}
          >
            <Grid container justifyContent="flex-end">
              <Grid item md={7} xs={12}>
                <AudioBar />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}
