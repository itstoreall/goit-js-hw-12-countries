import fetchCountries from "./js/fetchCountries";
import './styles.css';

fetch("https://restcountries.eu/rest/v2/name/ukraine")
   .then(response => response.json())
   .then(data => console.log(data));