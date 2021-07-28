
const ApiKey = config.MY_API_TOKEN;





// fetching the API using city as argument
const fetchApiWeatherByCity = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {

    });
};
