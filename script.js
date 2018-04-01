const form = document.querySelector("form");

const showWeather = (weather, temp) => {
  document.getElementById("my_weather").innerText = `${temp}\u2109 and ${weather}`;
};

const getWeather = (city) => {
  city = city;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=00e2d6bc3e2a0a1ccf62131112e0b068`, {mode: 'cors'})
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      weather = response.name;
      showWeather(response.weather[0].description, response.main.temp);
    })
    .catch(function(error) {
      document.getElementById("my_weather").innerText = "Error! That isn't a city -_-";
    })
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  getWeather(form.elements["city"].value);
});