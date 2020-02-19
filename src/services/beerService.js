const BEER_URL =
  "https://us-central1-irfighters-beer.cloudfunctions.net/api1/beer";

export function getAllBeers() {
  return fetch(BEER_URL).then(response => {
    return response.json();
  });
}
