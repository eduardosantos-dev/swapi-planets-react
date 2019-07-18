import React, { useState, useEffect } from "react";
import * as API from "./API";
import * as utils from "./utils";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxWidth: 375,
    marginTop: 50,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "black",
    color: "#FFE81F",
    border: "solid 1px #FFE81F"
  },
  title: {
    fontSize: 24
  },
  pos: {
    marginBottom: 12
  }
});

export default function PlanetCard(props) {
  const [planet, setPlanet] = useState(null);
  const classes = useStyles();

  const getRandomPlanet = () => {
    API.getRandomPlanet().then(result => {
      setPlanet(result);
    });
  };

  useEffect(() => {
    getRandomPlanet();
  }, []);

  return (
    <>
      {planet && (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          alignItems="flex-end"
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2" className={classes.title}>
                {planet.name}
              </Typography>
              <hr />
              <Typography gutterBottom>
                Population: {planet.population}
              </Typography>
              <Typography className={classes.pos}>
                Terrain: {planet.terrain}
              </Typography>
              <Typography variant="body2" component="p">
                {utils.getFeaturedInFilmsString(planet.films.length)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                onClick={() => getRandomPlanet()}
                color="secondary"
              >
                Next
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
}
