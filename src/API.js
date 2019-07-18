export function getRandomPlanet() {
  return fetch(`https://swapi.co/api/planets/${getRandomPlanetId()}/`).then(
    response => response.json()
  );
}

function getRandomPlanetId() {
  const planetCount = 61;
  return Math.floor(Math.random() * planetCount + 1);
}

function getPlanetCount() {
  return fetch(`https://swapi.co/api/planets/`)
    .then(response => response.json())
    .then(data => data.count);
}
