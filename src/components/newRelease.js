import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    display: "flex",
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
  const theme = useTheme();

  return (
    <div>
      <Typography variant="h5" component="div" align="left">
        <Box fontWeight="fontWeightBold" lineHeight="normal">
          New Release
        </Box>
      </Typography>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="/images/henrik-donnestad-V6Qd6zA85ck-unsplash.jpg"
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography component="div" variant="h5" align="center">
            <Box fontWeight="fontWeightBold" lineHeight="normal">
              But I must explain to You (Deluxe)
            </Box>
            <Box>2019.7.15</Box>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
