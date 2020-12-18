export default function fetchCountries(searchQuery) {
   console.log(searchQuery)

   fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
   .then(response => response.json())
   .then(data => console.log(data));
};