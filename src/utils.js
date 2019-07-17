export function getFeaturedInFilmsString(filmsCount) {
  const filmsString = filmsCount === 1 ? "film" : "films";

  return `Featured in ${filmsCount} ${filmsString}`;
}
