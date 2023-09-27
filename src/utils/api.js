const BASE_URL = 'https://restcountries.com/v3.1';
const FIELDS =
  '?fields=name,cca3,capital,tld,subregion,region,population,borders,currencies,languages,flags';

// GET CARDS DATA CONTENT FROM THE SERVER
export function getContent() {
  return fetch(`${BASE_URL}/all${FIELDS}`).then((res) =>
    res.ok
      ? res.json()
      : Promise.reject(new Error(`Error: ${res.status} ${res.statusText}`)),
  );
}
