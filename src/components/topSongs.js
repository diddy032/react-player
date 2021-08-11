import React from "react";
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
import IconButton from "@material-ui/core/IconButton";

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

const listData = [
  {
    AlbumName: "great pleasure",
    AlbumCover: "/images/henrik-donnestad-V6Qd6zA85ck-unsplash.jpg",
    AlbumTime: "5:34",
  },
  {
    AlbumName: "mistaken idea",
    AlbumCover: "/images/david-clode-xNSCi_K179c-unsplash.jpg",
    AlbumTime: "5:34",
  },
  {
    AlbumName: "explorer of the truth",
    AlbumCover: "/images/noah-silliman-gzhyKEo_cbU-unsplash.jpg",
    AlbumTime: "5:34",
  },
  {
    AlbumName: "master builder",
    AlbumCover: "/images/noah-silliman-gzhyKEo_cbU-unsplash.jpg",
    AlbumTime: "5:34",
  },
  {
    AlbumName: "because it is pain",
    AlbumCover: "images/piron-guillaume-NM77255WWVA-unsplash.jpg",
    AlbumTime: "5:34",
  },
];

export default function TopSongs() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" component="div" align="left">
        <Box fontWeight="fontWeightBold" lineHeight="normal">
          Top Songs
        </Box>
      </Typography>
      <List className={classes.root}>
        {listData.map((item, index) => (
          <>
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

              <IconButton aria-label="play music" color="inherit">
                <PlayArrowIcon fontSize="small" />
              </IconButton>
            </ListItem>
            <Divider variant="middle" component="li" />
          </>
        ))}
      </List>
    </div>
  );
}
