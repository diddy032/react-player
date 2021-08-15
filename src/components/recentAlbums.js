import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const settings = {
  speed: 500,
  dots: false,
  arrows: false,
  cassEase: "linear",
  autoplya: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageSize: {
    width: "160px",
    listStyle: "none",
  },
  imageHeight: {
    height: "160px",
  },
  imageWidth: {
    width: "160px",
    transform: "translateY(0)",
  },
  albumInfo: {
    height: "initial",
    marginTop: "8px",
    position: "relative",
    background: "transparent",
    textAlign: "left",
  },
  titleStyle: {
    marginLeft: "0",
    marginRight: "0",
    marginBottom: "5px",
    color: "#000",
    fontWeight: "600",
    whiteSpace: "initial",
    lineHeight: "18px",
  },
  subTitleStyle: {
    fontWeight: "400",
  },
}));

const itemData = [
  {
    AlbumName: "explorer of the truth",
    AlbumCover: "/images/noah-silliman-gzhyKEo_cbU-unsplash.jpg",
    AlbumTime: "5:34",
    AlbumYear: "2018",
  },
  {
    AlbumName: "great pleasure",
    AlbumCover: "/images/henrik-donnestad-V6Qd6zA85ck-unsplash.jpg",
    AlbumTime: "5:34",
    AlbumYear: "2017",
  },
  {
    AlbumName: "mistaken idea",
    AlbumCover: "/images/david-clode-xNSCi_K179c-unsplash.jpg",
    AlbumTime: "5:34",
    AlbumYear: "2015",
  },

  {
    AlbumName: "master builder",
    AlbumCover: "/images/noah-silliman-gzhyKEo_cbU-unsplash.jpg",
    AlbumTime: "5:34",
    AlbumYear: "2013",
  },
  {
    AlbumName: "because it is pain",
    AlbumCover: "images/piron-guillaume-NM77255WWVA-unsplash.jpg",
    AlbumTime: "5:34",
    AlbumYear: "2011",
  },
];

export default function RecentAlbums() {
  const classes = useStyles();
  const sliderRef = useRef(null);

  const preSlcik = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlcik = () => {
    sliderRef.current.slickNext();
  };

  function Item({ item }) {
    return (
      <ImageListItem
        key={item.AlbumCover}
        classes={{
          root: classes.imageSize,
          imgFullHeight: classes.imageHeight,
          imgFullWidth: classes.imageWidth,
        }}
      >
        <img src={item.AlbumCover} alt={item.title} />
        <ImageListItemBar
          title={item.AlbumName}
          subtitle={item.AlbumYear}
          classes={{
            root: classes.albumInfo,
            titleWrap: classes.titleStyle,
            title: classes.titleStyle,
            subtitle: classes.subTitleStyle,
          }}
        />
      </ImageListItem>
    );
  }

  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" component="div" align="left">
          <Box fontWeight="fontWeightBold" lineHeight="normal" display="inline">
            Recent Albums
          </Box>
        </Typography>
        <Box>
          <IconButton
            aria-label="play music"
            color="inherit"
            onClick={() => preSlcik()}
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="play music"
            color="inherit"
            onClick={() => nextSlcik()}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <div>
        <Slider {...settings} ref={sliderRef}>
          {itemData.map((item, i) => (
            <Item key={`Recent Albums ${i}`} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
