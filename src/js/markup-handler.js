import refs from "../js/refs.js";
import countries from "../templates/countries.hbs";
import targetCountry from "../templates/target-country.hbs";
import error from "./notifications.js";

function markupHandler(value) {
   let markup = "";

   if (value.length > 1 && value.length < 11) {
      clearMarkup();
      markup = countries(value);
   } else if (value.length === 1) {
      clearMarkup();
      markup = targetCountry(value);
   } else {
      clearMarkup();
      error();
   }

   refs.countriesContainer.insertAdjacentHTML('beforeend', `${markup}`);
};

function clearMarkup() {
   refs.countriesContainer.innerHTML = '';
};

export default markupHandler;