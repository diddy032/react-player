import React from "react";
import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { borders } from "@material-ui/system";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    boxShadow: "none",
    position: "relative",
    backgroundColor: "transparent",
    overflow: "initial",
    zIndex: "2",
    "&::before": {
      content: '""',
      width: "530px",
      height: "530px",
      backgroundColor: "#fff",
      position: "absolute",
      top: "-40px",
      left: "-53px",
      zIndex: "0",
    },
  },
  content: {
    padding: "0",
    zIndex: "2",
    backgroundColor: "#F5F5F5",
  },
  media: {
    position: "relative",
    height: 540,
    zIndex: "2",
  },
  followInfo: {
    marginRight: "auto",
    textTransform: "uppercase",
  },
  button: {
    marginLeft: "auto",
    padding: "5px 40px",
    borderRadius: "22px",
    fontSize: "16px",
  },
  roy: {
    margin: 20,
  },
});

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

const FallowButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#fff"),
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}))(Button);

const PlayButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#000"),
    backgroundColor: orange[800],
    "&:hover": {
      backgroundColor: orange[700],
    },
  },
}))(Button);

export default function AlbumCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <CardMedia
          className={classes.media}
          image="/images/richard-jaimes-jI5lCCGprgM-unsplash.jpg"
          title="Album Image"
        />
        <CardActions>
          <Typography variant="h2" component="div" align="left">
            <Box
              fontWeight="fontWeightBold"
              borderBottom={4}
              lineHeight="normal"
              letterSpacing={2}
              m={0}
            >
              Richard Green
            </Box>
          </Typography>
        </CardActions>
        <CardActions>
          <Typography
            gutterBottom
            component="div"
            align="left"
            className={classes.followInfo}
          >
            <Box
              fontWeight="fontWeightBold"
              fontSize="h6.fontSize"
              lineHeight="normal"
            >
              followers
            </Box>
            <Box
              fontWeight="fontWeightBold"
              fontSize="h4.fontSize"
              lineHeight="normal"
            >
              5,790
            </Box>
          </Typography>
          <FallowButton
            className={classes.button}
            size="medium"
            variant="outlined"
          >
            Follow
          </FallowButton>
          <PlayButton
            className={classes.button}
            size="medium"
            color="primary"
            variant="contained"
          >
            play
          </PlayButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
