import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(0 ,0 ,0 , 0.8)",
    color: "#fff",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "96px",
    height: "96px",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
    padding: "5px",
    color: "#000",
    background: "#fff",
    borderRadius: "50%",
  },
  musicBtn: {
    color: "#fff",
  },
}));

export default function AudioBar() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box>
      <Card className={classes.root}>
        <Avatar
          src="/images/david-clode-xNSCi_K179c-unsplash.jpg"
          alt="Live from space album cover"
          variant="square"
          classes={{ root: classes.cover }}
        />
        <div style={{ width: "100%", height: "100%" }}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="div" variant="body1">
                <Box fontWeight="fontWeightBold" textAlign="left">
                  great pleasure
                </Box>
                <Box fontWeight="fontWeightLight" textAlign="left">
                  Richard Green
                </Box>
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton
                aria-label="previous"
                classes={{ root: classes.musicBtn }}
              >
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon classes={{ root: classes.playIcon }} />
              </IconButton>
              <IconButton
                aria-label="next"
                classes={{ root: classes.musicBtn }}
              >
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
              <Box>
                <Grid container spacing={2}>
                  <Grid item>
                    <VolumeUp />
                  </Grid>
                  <Grid item>
                    <Slider aria-labelledby="input-slider" />
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
          <MusicProgress variant="determinate" value={50} />
        </div>
      </Card>
      {/* <Box component="div" bgcolor="text.primary" color="background.paper">
        great pleasure <br /> Richard Green
      </Box> */}
      {/* <AudioPlayer
        autoPlay={false}
        src="/audio/URL Melt - Unicorn Heads.mp3"
        onPlay={(e) => console.log("onPlay")}
      /> */}
    </Box>
  );
}

function MusicProgress(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%">
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}
