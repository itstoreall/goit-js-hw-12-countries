import refs from "./js/refs.js";
import fetchCountries from "./js/fetchCountries";
const debounce = require('lodash.debounce');
import "./js/notifications";
import './styles.css';

refs.inputValue.addEventListener('input', debounce((e) => {
     const searchQuery = e.target.value;
     fetchCountries(searchQuery);
  }, 500),
);