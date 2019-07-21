import React, { useState, useEffect } from "react";
import * as API from "../../helpers/API";
import * as utils from "../../helpers/utils";
import { ClipLoader } from "react-spinners";
import { ThemeProvider } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  createMuiTheme,
  makeStyles
} from "@material-ui/core";

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: `#FFE81F`
    },
    secondary: {
      main: `#000`
    }
  }
});

const useStyles = makeStyles({
  box: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    maxWidth: 450,
    minHeight: 400,
    marginTop: 50,
    backgroundColor: mainTheme.palette.secondary.main,
    border: `solid 1px ${mainTheme.palette.primary.main}`,
    zIndex: 1,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    textAlign: "left",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    minWidth: "100%"
  },
  title: {
    fontSize: "2em"
  },
  planetInfoItem: {
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 15,
    fontSize: "1.2em"
  },
  planetInfoData: {
    color: "white"
  }
});

export default function PlanetCard() {
  const [planet, setPlanet] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const classes = useStyles();
  const { primary } = mainTheme.palette;

  const getRandomPlanet = () => {
    setIsFetching(true);
    API.getRandomPlanet()
      .then(result => {
        setPlanet(result);
        setIsFetching(false);
      })
      .catch(() => {
        console.error("Unable to load planet");
        setIsFetching(false);
      });
  };

  useEffect(() => {
    getRandomPlanet();
  }, []);

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Box className={classes.box}>
          <Card className={classes.card}>
            {isFetching || !planet ? (
              <ClipLoader
                color={primary.main}
                size={75}
                css={{ marginTop: 150 }}
              />
            ) : (
              <>
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.title}
                    color="primary"
                  >
                    {planet.name}
                  </Typography>
                  <hr
                    style={{
                      marginTop: 25,
                      marginBottom: 25,
                      border: `1px solid ${primary.main}`
                    }}
                  />
                  <Typography
                    className={classes.planetInfoItem}
                    color="primary"
                  >
                    Population:{" "}
                    <span className={classes.planetInfoData}>
                      {planet.population}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.planetInfoItem}
                    color="primary"
                  >
                    Climate:{" "}
                    <span className={classes.planetInfoData}>
                      {planet.climate}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.planetInfoItem}
                    color="primary"
                  >
                    Terrain:{" "}
                    <span className={classes.planetInfoData}>
                      {planet.terrain}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.planetInfoItem}
                    style={{ alignSelf: "center", marginTop: 50 }}
                    color="primary"
                  >
                    {utils.getFeaturedInFilmsString(planet.films.length)}
                  </Typography>
                </CardContent>
                <CardActions style={{ width: "94%" }}>
                  <Button
                    size="large"
                    onClick={() => getRandomPlanet()}
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    <span style={{ fontWeight: "bold" }}>Next</span>
                  </Button>
                </CardActions>
              </>
            )}
          </Card>
        </Box>
      </ThemeProvider>
    </>
  );
}
