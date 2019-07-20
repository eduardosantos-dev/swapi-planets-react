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
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ClipLoader } from "react-spinners";

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
  //let fetchInProgress = false;

  const getRandomPlanet = () => {
    setIsFetching(true);
    API.getRandomPlanet()
      .then(result => {
        setPlanet(result);
        setIsFetching(false);
      })
      .catch(() => {
        console.error("erro");
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
