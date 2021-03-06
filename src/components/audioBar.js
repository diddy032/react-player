import { useState, useEffect, useMemo } from "react";
import useAudioPlay from "./hook/audioPlay";

import clsx from "clsx";
import PropTypes from "prop-types";

import { makeStyles, createTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1.2, 2),
      justifyContent: "space-between",
    },
  },
  content: {
    padding: "0",
    height: "fit-content",
    margin: "auto 0",
    [theme.breakpoints.up("md")]: {
      width: "35%",
      margin: "auto",
    },
  },
  cover: {
    width: "65px",
    height: "65px",
    [theme.breakpoints.up("md")]: {
      width: "96px",
      height: "96px",
    },
  },
  toolArea: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0 ,0 ,0 , 0.8)",
  },
  controls: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      flex: "auto",
    },
  },
  playIcon: {
    height: 20,
    width: 20,
    padding: "2px",
    color: "#000",
    background: "#fff",
    borderRadius: "50%",
    [theme.breakpoints.up("md")]: {
      height: 38,
      width: 38,
      padding: "5px",
    },
  },
  audioBarColor: {
    color: "#fff",
  },
  audioBarIcon: {
    padding: "12px 0",
    [theme.breakpoints.up("md")]: {
      padding: "12px",
    },
  },
  zoomOutIcon: {
    display: "none",
    paddingRight: "0",
    [theme.breakpoints.up("md")]: {
      display: "initial",
      marginRight: 0,
    },
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
  const [
    players,
    toggle,
    volume,
    setVolume,
    handleChangeMusecSec,
    secPercentage,
  ] = useAudioPlay();
  const [nowPlayNum, setNowPlayNum] = useState(0);
  const [position, setPosition] = useState(secPercentage);
  useMemo(() => setPosition(secPercentage), [secPercentage]);

  useEffect(() => {
    const idx = players?.findIndex((audio) => audio?.playing);
    idx > -1 && setNowPlayNum(idx);
  }, [toggle, players]);

  const arrorEvent = (str) => {
    let num = nowPlayNum;
    if (str === "pre") nowPlayNum !== 0 ? (num -= 1) : (num = 0);
    if (str === "next")
      nowPlayNum !== musicDataList.length - 1 ? num++ : (num = nowPlayNum);

    if (num !== nowPlayNum) {
      toggle(num);
      setNowPlayNum(num);
    }
  };

  return (
    <Box>
      <Card className={classes.root}>
        <Avatar
          src="/react-player/images/david-clode-xNSCi_K179c-unsplash.jpg"
          src={musicDataList[nowPlayNum]?.AlbumCover}
          alt="Live from space album cover"
          variant="square"
          classes={{ root: classes.cover }}
        />
        <div className={classes.toolArea}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="div" variant="body1" noWrap>
                <Box fontWeight="fontWeightBold" textAlign="left">
                  {musicDataList[nowPlayNum]?.AlbumName}
                </Box>
                <Box fontWeight="fontWeightLight" textAlign="left">
                  {musicDataList[nowPlayNum]?.AlbumAuthor}
                </Box>
              </Typography>
            </CardContent>
            <Box className={classes.controls}>
              <IconButton
                aria-label="previous"
                classes={{
                  root: clsx(classes.audioBarColor, classes.audioBarIcon),
                }}
                disableFocusRipple={nowPlayNum === 0}
                onClick={() => arrorEvent("pre")}
              >
                <SkipPreviousIcon />
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
                classes={{
                  root: clsx(classes.audioBarColor, classes.audioBarIcon),
                }}
                onClick={() => arrorEvent("next")}
              >
                <SkipNextIcon />
              </IconButton>
              {/* ??????Slider */}
              <Box
                width="30%"
                maxWidth="150px"
                ml="auto"
                mr="10px"
                sx={{
                  display: "none",
                  [theme.breakpoints.up("md")]: {
                    display: "initial",
                  },
                }}
              >
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

              {/* ????????????????????? */}
              <IconButton
                p="0"
                aria-label="ZoomOutPlayer"
                classes={{
                  root: clsx(
                    classes.audioBarColor,
                    classes.zoomOutIcon,
                    classes.audioBarIcon
                  ),
                }}
              >
                <ZoomOutMapIcon />
              </IconButton>
            </Box>
          </div>

          {/* ??????????????? */}
          <Slider
            aria-label="time-indicator"
            size="small"
            defaultValue={0}
            value={position}
            min={0}
            step={1}
            max={100}
            valueLabelDisplay="on"
            onChange={(_, value) => {
              setPosition(value);
              handleChangeMusecSec(value);
            }}
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
