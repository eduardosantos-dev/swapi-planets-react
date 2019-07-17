import React, { Component } from "react";
import * as API from "./API";
import * as utils from "./utils";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: null
    };
  }

  componentDidMount() {
    this.getRandomPlanet();
  }

  getRandomPlanet() {
    API.getRandomPlanet().then(result => {
      this.setState({ planet: result });
    });
  }

  render() {
    const { planet } = this.state;
    return (
      <div className="App">
        {planet && (
          <>
            <h1>Name: {planet.name}</h1>
            <h2>Population: {planet.population}</h2>
            <h2>Climate: {planet.climate}</h2>
            <h2>Terrain: {planet.terrain}</h2>
            <h2>{utils.getFeaturedInFilmsString(planet.films.length)}</h2>
            <button onClick={() => this.getRandomPlanet()}> Next </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
