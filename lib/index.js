import { addweather } from './weather';
import { fetchCurrentPositionWeather } from './currentcity';

// showing the results upon form submission
const form = document.querySelector("#search-weather");
form.addEventListener("submit", addweather);

// showing the results when the user clicks the button
const link = document.querySelector("#current-location");
link.addEventListener("click", fetchCurrentPositionWeather);
