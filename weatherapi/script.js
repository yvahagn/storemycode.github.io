"use strict";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Glendale&APPID=b493e32b740620ede5a14cc6243fe7f1";

$.ajax({
  url: url,
  success: function (result) {
    console.log(result);
    console.log(result.name);

    $("#location").text(result.name);

    let f = Math.round(result.main.temp * (9 / 5) - 459.67);
    let Farenheit = f.toString();

    let displayeTemp = `Temperature: ${f}`;
    $("#temperature").text(Farenheit);

    let windSpeed = Math.round(result.wind.speed / 0.44704);
    let wind = windSpeed.toString();

    $("#wind").text(wind);
    $("#sky").text(result.weather[0].description);
  },
});
