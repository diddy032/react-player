import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Paper, Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageList: {
    width: "100%",
    height: 300,
  },
}));

const itemData = [
  {
    AlbumName: "explorer of the truth",
    AlbumCover: "/images/noah-silliman-gzhyKEo_cbU-unsplash.jpg",
    AlbumTime: "5:34",
  },
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

export default function RecentAlbums() {
  const classes = useStyles();

  function Item({ item }) {
    return (
      <Paper>
        <ImageListItem key={item.AlbumCover}>
          <img src={item.AlbumCover} alt={item.title} />
        </ImageListItem>
      </Paper>
    );
  }

  return (
    <div>
      <Typography variant="h5" component="div" align="left">
        <Box fontWeight="fontWeightBold" lineHeight="normal">
          Recent Albums
        </Box>
      </Typography>
      <div className={classes.root}>
        <ImageList rowHeight={180} className={classes.imageList} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.AlbumCover}>
              <img src={item.AlbumCover} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div>
        <Carousel
          animation="slide"
          indicators={false}
          autoPlay={false}
          NextIcon="next"
          PrevIcon="prev"
          NextIcon={<PlayArrowIcon />}
          PrevIcon={<PlayArrowIcon />}
          navButtonsAlwaysVisible={true}
          next={(now, previous) =>
            console.log(
              `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          prev={(now, previous) =>
            console.log(
              `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          onChange={(now, previous) =>
            console.log(
              `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
        >
          {itemData.map((item, i) => (
            <Item key={`Recent Albums ${i}`} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
