
const ApiKey = config.MY_API_TOKEN;

// getting the local time of each city
const getCurrentTime = (data) => {
  const utcTime = data.dt;
  const offset = data.timezone;
  const localTimeInSeconds = utcTime + offset;
  const localTimeInMilliseconds = localTimeInSeconds * 1000;
  const currentUserOffsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000;
  const currentTime = new Date(localTimeInMilliseconds + currentUserOffsetInMilliseconds);
  const timeOptions = {
    weekday: 'long',
    hour12: true,
    hour: '2-digit',
    month: 'long',
    day: 'numeric'
  };
  return currentTime.toLocaleDateString('default', timeOptions); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
};

// append the results to the DOM
const insertWeatherToTheDom = (city, country, date, weatherDescription, icon, temperature, windSpeed) => {
  const results = document.querySelector("#weather");
  const weatherHTML = `
    <h3>Weather in ${city}, ${country}</h3>
    <p id="date"><strong>${date}</strong></p>
    <p id="temperature"><img src=${icon}>🌡 ${temperature}°C, ${weatherDescription}</p>
    <p> Wind: ${windSpeed} Km/h</p>
  `
  results.insertAdjacentHTML('beforeend', weatherHTML);
};

// digging in the API to extract the relevant data to display in the card
const updateCard = (data) => {
  const results = document.querySelector("#weather");
  results.innerHTML = "";
  const city = data.name;
  const country = data.sys.country;
  const date = getCurrentTime(data);
  const weatherDescription = data.weather[0].description;
  const icon = data.weather[0].icon;
  const iconImg = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const temperature = Math.round(data.main.temp);
  const windSpeed = Math.round(data.wind.speed);
  insertWeatherToTheDom(city, country, date, weatherDescription, iconImg, temperature, windSpeed);
};

// fetching the API using city as argument
const fetchApiWeatherByCity = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(updateCard);
};
