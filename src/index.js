import fetchCountries from "./js/fetchCountries";
const debounce = require('lodash.debounce');
import './styles.css';

document.querySelector('input').addEventListener(
  'input',
  debounce((e) => {
     const searchQuery = e.target.value;
     fetchCountries(searchQuery);
  }, 500),
);


