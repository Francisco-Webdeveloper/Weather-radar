import { updateCard } from './weather';

const ApiKey = config.MY_API_TOKEN;

// fetch the API using coordinates as argument
const fetchApiWeatherByCoordinates = (coordinates) => {
  const urlCoordinates = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${ApiKey}`;
  fetch(urlCoordinates)
    .then(response => response.json())
    .then(updateCard);
};

// get the user's current location
const fetchCurrentPositionWeather = (event) => {
  event.preventDefault();
  const results = document.querySelector("#weather");
  results.classList.add("white-bg");
  navigator.geolocation.getCurrentPosition((data) => {
    fetchApiWeatherByCoordinates({ lat: data.coords.latitude, lon: data.coords.longitude });
  });
};

export { fetchCurrentPositionWeather };
