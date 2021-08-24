import React from "react";
import { useState, useEffect } from "react";
import useAudioPlay from "./hook/audioPlay";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import IconButton from "@material-ui/core/IconButton";

import musicDataList from "../data/musicList";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  inlineItem: {
    padding: "2px 0",
  },
  avatar: {
    marginLeft: "25px",
    marginRight: "30px",
  },
  text: {
    width: "250px",
    marginRight: "30px",
  },
});

export default function TopSongs() {
  const classes = useStyles();
  const [players, toggle] = useAudioPlay(musicDataList);

  return (
    <div>
      <Typography variant="h5" component="div" align="left">
        <Box fontWeight="fontWeightBold" lineHeight="normal">
          Top Songs
        </Box>
      </Typography>
      <List className={classes.root}>
        {musicDataList?.length > 0 &&
          musicDataList?.map((item, index) => (
            <Box component="span" key={`top-song-${index}`}>
              <ListItem
                alignItems="center"
                classes={{ root: classes.inlineItem }}
              >
                <Box>
                  <ListItemText primary={index + 1} />
                </Box>
                <ListItemAvatar>
                  <Avatar
                    alt={item.AlbumName}
                    src={item.AlbumCover}
                    variant="square"
                    classes={{ root: classes.avatar }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.AlbumName}
                  classes={{ root: classes.text }}
                />
                <ListItemText primary={item.AlbumTime} />
                <HandlePlayMusic
                  playing={players[index].playing}
                  toggle={() => toggle(index)}
                />
              </ListItem>
              <Divider variant="middle" component="li" />
            </Box>
          ))}
      </List>
    </div>
  );
}

function HandlePlayMusic({ playing, toggle }) {
  return (
    <IconButton aria-label="play music" color="inherit" onClick={toggle}>
      {playing ? (
        <PauseIcon fontSize="small" />
      ) : (
        <PlayArrowIcon fontSize="small" />
      )}
    </IconButton>
  );
}
