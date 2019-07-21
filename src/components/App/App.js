import React, { Component } from "react";
import PlanetCard from "../PlanetCard/PlanetCard";
import { Container } from "@material-ui/core";
import "../../index.css";
import TwinklingStars from "../TwinklingStars/TwinklingStars";
import Contacts from "../Contacts/Contacts";

class App extends Component {
  render() {
    return (
      <Container>
        <TwinklingStars />
        <PlanetCard />
        <Contacts />
      </Container>
    );
  }
}

export default App;
