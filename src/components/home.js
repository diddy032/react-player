import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//畫面
import AlbumCard from "./albumCard";
import TopSongs from "./topSongs";
import NewRelease from "./newRelease";
import RecentAlbums from "./recentAlbums";
import AudioBar from './audioBar'

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    position: "relative",
    flexGrow: 1,
    // maxWidth: "1200px",
    margin: "auto",
    backgroundColor: "#F5F5F5",
  },
  container: {
    padding: "40px 30px",
  },
  paper: {
    width: "100%",
    // padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    backgroundColor: "transparent",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>
              <AlbumCard />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>
              <TopSongs />
              <NewRelease />
              <RecentAlbums />
              <AudioBar/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
