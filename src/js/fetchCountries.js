import markupHandler from "./markup-handler.js";

const fetchCountries = searchQuery => {
   const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
   
fetch(url)
.then(res => res.json())
   .then(data => markupHandler(data));
};

export default fetchCountries;