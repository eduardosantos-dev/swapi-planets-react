let planetCount;

export function getRandomPlanet() {
  return getRandomPlanetId().then(planetId =>
    fetch(`https://swapi.co/api/planets/${planetId}/`).then(res => res.json())
  );
}

function getRandomPlanetId() {
  return getPlanetCount().then(() =>
    Math.floor(Math.random() * planetCount + 1)
  );
}

function getPlanetCount() {
  if (typeof planetCount !== "undefined") {
    return new Promise(resolve => resolve()).then(() => planetCount);
  } else {
    return fetch(`https://swapi.co/api/planets/`)
      .then(response => response.json())
      .then(data => (planetCount = data.count));
  }
}
