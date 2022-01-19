import { useState, useMemo } from "react";
import useAudioPlay from "./hook/audioPlay";

import clsx from "clsx";
import PropTypes from "prop-types";

import { makeStyles, useTheme } from "@material-ui/core/styles";
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
    color: "#fff",
  },
  content: {
    padding: "0",
    height: "fit-content",
    margin: "auto",
  },
  cover: {
    width: "96px",
    height: "96px",
  },
  toolArea: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0 ,0 ,0 , 0.8)",
  },
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
  progressStyle: {
    color: "#FF6C00",
    padding: 0,
    height: 0,
    display: "block",
    "& .MuiSlider-track": {
      height: 4,
    },
    "& .MuiSlider-thumb": {
      display: "none",
    },
    "& .MuiSlider-rail": {
      height: 4,
      backgroundColor: "rgba(0, 0, 0, 1)",
    },
  },
}));

export default function AudioBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [
    players,
    toggle,
    volume,
    setVolume,
    handleChangeMusecSec,
    secPercentage,
  ] = useAudioPlay(musicDataList);
  const [nowPlayNum, setNowPlayNum] = useState(0);
  const [position, setPosition] = useState(secPercentage);
  console.log(
    "目前的秒數 這是在上層的 secPercentage",
    secPercentage,
    "position",
    position
  );
  useMemo(() => setPosition(secPercentage), [secPercentage]);

  const arrorEvent = (str) => {
    let num = nowPlayNum;
    if (str === "pre") nowPlayNum !== 0 ? (num -= 1) : (num = 0);
    if (str === "next")
      nowPlayNum !== musicDataList.length ? num++ : (num = nowPlayNum);

    toggle(num);
    setNowPlayNum(num);
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
        <div className={classes.toolArea}>
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
                      aria-label="Volume"
                      ValueLabelComponent={ValueLabelComponent}
                      aria-labelledby="input-slider"
                      defaultValue={30}
                      classes={{
                        root: classes.audioBarColor,
                      }}
                      onChange={(_, num) => setVolume(num)}
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
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={100}
            onChange={(_, value) => (
              setPosition(value), handleChangeMusecSec(value)
            )}
            classes={{
              root: classes.progressStyle,
            }}
          />
        </div>
      </Card>
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
