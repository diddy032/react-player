import { useState } from "react";
import useAudioPlay from "./hook/audioPlay";

import clsx from "clsx";
import PropTypes from "prop-types";

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
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import Tooltip from "@material-ui/core/Tooltip";

import musicDataList from "../data/musicList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    padding: theme.spacing(1.2, 2),
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(0 ,0 ,0 , 0.8)",
    color: "#fff",
  },
  content: {
    padding: "0",
    height: "fit-content",
    margin: "auto",
    // flex: "1 0 auto",
  },
  cover: {
    width: "96px",
    height: "96px",
  },
  // controls: {
  // },
  playIcon: {
    height: 38,
    width: 38,
    padding: "5px",
    color: "#000",
    background: "#fff",
    borderRadius: "50%",
  },
  audioBarColor: {
    color: "#fff",
  },
  zoomOutIcon: {
    paddingRight: "0",
  },
  musicProgress: {
    height: "5px",
    cursor: "pointer",
  },
  progressColorPrimary: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  progressColorBar: {
    backgroundColor: "#FF6C00",
  },
  musicProgressBar: {
    pointerEvents: "none",
  },
}));

export default function AudioBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [players, toggle, volume, setVolume, handleChangeMusecSec] =
    useAudioPlay(musicDataList);
  const [nowPlayNum, setNowPlayNum] = useState(0);
  const [secPercentage, setSecPercentage] = useState(0);

  const arrorEvent = (str) => {
    let num = nowPlayNum;
    if (str === "pre") nowPlayNum !== 0 ? (num -= 1) : (num = 0);
    if (str === "next")
      nowPlayNum !== musicDataList.length ? num++ : (num = nowPlayNum);

    toggle(num);
    setNowPlayNum(num);
  };

  const updateProgress = (e) => {
    let offset = e.target.getBoundingClientRect().left;
    let newOffSet = e.clientX;
    let newWidth = newOffSet - offset;
    let secPercentage = parseInt((newWidth / e.target.clientWidth) * 100);
    handleChangeMusecSec(secPercentage);
    setSecPercentage(secPercentage); //暫時用不到
  };

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
            <Box
              display="flex"
              alignItems="center"
              flex="auto"
              // className={classes.controls}
            >
              <IconButton
                aria-label="previous"
                classes={{ root: classes.audioBarColor }}
                onClick={() => arrorEvent("pre")}
              >
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton
                aria-label="play/pause"
                onClick={() => toggle(nowPlayNum, true)}
              >
                {players[nowPlayNum].playing ? (
                  <PauseIcon classes={{ root: classes.playIcon }} />
                ) : (
                  <PlayArrowIcon classes={{ root: classes.playIcon }} />
                )}
              </IconButton>
              <IconButton
                aria-label="next"
                classes={{ root: classes.audioBarColor }}
                onClick={() => arrorEvent("next")}
              >
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
              {/* 音量Slider */}
              <Box width="30%" maxWidth="150px" ml="auto" mr="10px">
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    {volume !== 0 ? <VolumeUp /> : <VolumeOffIcon />}
                  </Grid>
                  <Grid item xs>
                    <Slider
                      ValueLabelComponent={ValueLabelComponent}
                      aria-labelledby="input-slider"
                      defaultValue={20}
                      classes={{
                        root: classes.audioBarColor,
                      }}
                      onChange={(e, num) => setVolume(num)}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* 放大播放器畫面 */}
              <IconButton
                p="0"
                aria-label="ZoomOutPlayer"
                classes={{
                  root: clsx(classes.audioBarColor, classes.zoomOutIcon),
                }}
              >
                <ZoomOutMapIcon />
              </IconButton>
            </Box>
          </div>

          {/* 音樂進度軸 */}
          <MusicProgress
            value={secPercentage}
            classes={{
              root: classes.musicProgress,
              colorPrimary: classes.progressColorPrimary,
              barColorPrimary: classes.progressColorBar,
              bar: classes.musicProgressBar,
            }}
            updateProgress={updateProgress}
          />
        </div>
      </Card>
    </Box>
  );
}

function MusicProgress(props) {
  const { value, classes, updateProgress } = props;
  return (
    <Box display="flex" alignItems="center" bgcolor="text.secondary">
      <Box width="100%">
        <LinearProgress
          variant="determinate"
          value={value}
          classes={classes}
          onClick={(e) => updateProgress(e)}
        />
      </Box>
    </Box>
  );
}

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
