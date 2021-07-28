
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
}



// fetching the API using city as argument
const fetchApiWeatherByCity = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {

    });
};
