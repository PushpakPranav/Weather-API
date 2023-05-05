// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  //CODE GOES HERE
  const WeatherPromise = fetch(FULL_URL);
  return WeatherPromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;

  // CODE GOES HERE
  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
    })
    .catch((err) => {
      console.log(err);
    });
};


showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData["name"];
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
