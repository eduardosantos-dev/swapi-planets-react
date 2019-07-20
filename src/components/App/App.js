import React, { Component } from "react";
import PlanetCard from "../PlanetCard/PlanetCard";
import { Container } from "@material-ui/core";
import "../../index.css";
import TwinklingStars from "../TwinklingStars/TwinklingStars";

class App extends Component {
  render() {
    return (
      <Container>
        <TwinklingStars />
        <PlanetCard />
      </Container>
    );
  }
}

export default App;
