import countries from "../templates/countries.hbs";
import targetCountrie from "../templates/target-country.hbs";

const refs = {
   countriesContainer: document.querySelector('.js-countries'),
};

const fetchCountries = searchQuery => {
const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
fetch(url)
.then(res => res.json())
   .then(data => {
      const markupCountries = countries(data);
      const markupTargetCountry = targetCountrie(data);

      markupHandler(data, markupCountries, markupTargetCountry);
});
};

function markupHandler(value, countries, targetCountry) {
   let markup = "";

   value.length > 1 && value.length < 11
      ? markup = countries
      : markup = targetCountry;
   
   refs.countriesContainer.insertAdjacentHTML('beforeend', `${markup}`);
}


export default fetchCountries;