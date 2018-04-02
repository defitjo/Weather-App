const myKey = config.MY_KEY;

const form = document.querySelector('form');

const showWeather = (weather, temp) => {
  document.getElementById('my_weather').innerText = `${Math.round((temp - 273.15) * 1.8) + 32}\u2109 and ${weather}`;
};

const getWeather = (cities) => {
  city = cities;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${myKey}`, { mode: 'cors' })
    .then(response => response.json())
    .then((response) => {
      weather = response.name;
      showWeather(response.weather[0].description, response.main.temp);
    })
    .catch(() => {
      document.getElementById('my_weather').innerText = "Error! That isn't a city -_-";
    });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  getWeather(form.elements.city.value);
});
