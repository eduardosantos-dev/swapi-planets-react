import React, { Component } from "react";
import PlanetCard from "./PlanetCard";
import { Container } from "@material-ui/core";
import "./App.css";
import TwinklingStars from "./TwinklingStars";

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
