const weather = require('yahoo-weather')

module.exports = getWeatherData

/** Get weather data returns a promise **/
function getWeatherData (city) {
  return weather(city)
}

// getWeatherData('Wellington')
//   .then(response => console.log(response.item.condition.temp))
//   .catch(error => console.log(error))
