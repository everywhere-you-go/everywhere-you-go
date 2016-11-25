const weather = require('yahoo-weather')

module.exports = getWeatherData

function getWeatherData(city, callback) {
  weather(city).then(data => {
    callback(data)
  }).catch(err => {
    console.log(err);
  })
}
