import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    width: 160,
    height: 160,
  },
}));

export default function NewRelease() {
  const classes = useStyles();

  return (
    <Box my={2}>
      <Typography variant="h5" component="div" align="left">
        <Box fontWeight="fontWeightBold" lineHeight="normal">
          New Release
        </Box>
      </Typography>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="/react-player/images/henrik-donnestad-V6Qd6zA85ck-unsplash.jpg"
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography component="div" variant="h5" align="center">
            <Box fontWeight="fontWeightBold" lineHeight="normal">
              But I must explain to You (Deluxe)
            </Box>
          </Typography>
          <Typography variant="subtitle1" align="center">
            <Box>2019.7.15</Box>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
