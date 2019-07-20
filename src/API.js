let planetCount;

// Gets how many planets exist in the Star Wars Universe
function getPlanetCount() {
  if (typeof planetCount !== "undefined") {
    return new Promise(resolve => resolve()).then(() => planetCount);
  } else {
    return fetch(`https://swapi.co/api/planets/`)
      .then(response => response.json())
      .then(data => (planetCount = data.count));
  }
}

// Gets a random planet Id based on the total planet count
function getRandomPlanetId() {
  return getPlanetCount().then(() =>
    Math.floor(Math.random() * planetCount + 1)
  );
}

// fetches a random planet from the Star Wars API
export function getRandomPlanet() {
  return getRandomPlanetId().then(planetId =>
    fetch(`https://swapi.co/api/planets/${planetId}/`).then(res => res.json())
  );
}
