const weather = require('yahoo-weather')

module.exports = getWeatherData

function getWeatherData(city, callback) {
  weather(city).then(data => {
    // console.log("location is:", data.location.city + ", " + data.location.country)
    // console.log("lat and log are:", data.item.lat + ", " + data.item.long)
    // console.log("temperature is:", data.item.condition.temp)
    // console.log("conditions are:", data.item.condition.text)
    callback(data)
  }).catch(err => {
    console.log(err);
  })
}

// getWeatherData('London')
// getWeatherData('Wellington')

// getWeatherData(function(response){
//   dispatch(type: 'ADD_QUESTION', payload: {correctTemp: data.item.condition.temp})
// })
