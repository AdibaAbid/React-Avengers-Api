const apikey = "a2f5d2786bd82d041f006bbc44ec6e17";

export const getAvengers = () => {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}`
  )
    .then((response) => response.json())
    .then((avengers) => avengers.data.results);
};
