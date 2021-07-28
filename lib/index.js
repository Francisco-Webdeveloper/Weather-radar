import { addweather } from './weather';

// showing the results upon form submission
const form = document.querySelector("#search-weather");
form.addEventListener("submit", addweather);
