import {
  withStyles,
  makeStyles,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { orange } from "@material-ui/core/colors";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "20px",
    maxWidth: 600,
    boxShadow: "none",
    position: "relative",
    backgroundColor: "transparent",
    overflow: "initial",
    zIndex: "2",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
    "&::before": {
      content: '""',
      maxWidth: "530px",
      maxHeight: "530px",
      width: "100%",
      backgroundColor: "#fff",
      position: "absolute",
      top: "-4%",
      left: "-5%",
      zIndex: "0",
      height: "70vw",
      [theme.breakpoints.up("sm")]: {
        height: "55vw",
      },
      [theme.breakpoints.up("md")]: {
        height: "45vw",
      },
    },
  },
  content: {
    padding: "0",
    zIndex: "2",
    backgroundColor: "#F5F5F5",
  },
  media: {
    position: "relative",
    maxHeight: "540px",
    height: "70vw",
    zIndex: "2",
    [theme.breakpoints.up("sm")]: {
      height: "55vw",
    },
    [theme.breakpoints.up("md")]: {
      height: "45vw",
    },
  },
  followInfo: {
    margin: "auto",
    marginBottom: "20px",
    textTransform: "uppercase",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      margin: "0",
      marginRight: "auto",
      marginBottom: "0",
      textAlign: "left",
    },
  },
  button: {
    margin: "5px auto",
    padding: "5px 40px",
    borderRadius: "22px",
    fontSize: "16px",
    height: " min-content",
    [theme.breakpoints.up("md")]: {
      margin: "0",
      marginLeft: "auto",
    },
  },
  roy: {
    margin: 20,
  },
}));

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
    <>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <CardMedia
            className={classes.media}
            image="/images/richard-jaimes-jI5lCCGprgM-unsplash.jpg"
            title="Album Image"
            variant="square"
          />
        </CardContent>
      </Card>
      <Box
        sx={{
          width: "100%",
          [theme.breakpoints.up("md")]: { width: "80%" },
        }}
      >
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            marginTop: "15px",
            [theme.breakpoints.up("md")]: {
              flexDirection: "initial",
              justifyContent: "space-between",
            },
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              gutterBottom
              component="div"
              align="left"
              className={classes.followInfo}
            >
              <Box
                fontWeight="fontWeightBold"
                fontSize="h5.fontSize"
                lineHeight="normal"
              >
                followers
              </Box>
              <Box
                fontWeight="fontWeightBold"
                fontSize="h3.fontSize"
                lineHeight="normal"
              >
                5,790
              </Box>
            </Typography>
          </ThemeProvider>
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
        </Box>
      </Box>
    </>
  );
}
