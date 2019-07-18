import React, { Component } from "react";
import PlanetCard from "./PlanetCard";
import { Container } from "@material-ui/core";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <PlanetCard />
      </Container>
    );
  }
}

export default App;
