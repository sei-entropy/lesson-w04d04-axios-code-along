"use strict";


// 1. Find the correct (endpoint)
const END_POINT='/photos/random'
// 2. Get API KEY
const API_KEY='1d3c68645f734463181252c2c3fd42c1834a6e63c3c5c0154065533581cb697e'
// 3. Test the API in Postman
const bg = document.querySelector('.bg');


axios({
  method: "GET",
  url: `https://api.unsplash.com/photos/random?client_id=${API_KEY}`
})
  .then(response => {
    const bgImage = response.data.urls.small;

    bg.style.backgroundImage = `url(${bgImage})`;
  })
  .catch(error => {
    console.log(error);
  });




///////////////////////////////////////////////////////////
//weather

const cityName = document.querySelector("#city");
const weather = document.querySelector("#degree");
const icons = {
  clear: "☀",
  rain: "️🌧",
  storm: "⛈",
  snow: "🌨",
  mist: "🌫",
  clouds: "☁"
};


const weatherKey = "b4313084a7c6d98e1a835c23bb48b635";
const cityUrl = "Riyadh";

axios({
  method: "GET",
  url: `http://api.openweathermap.org/data/2.5/weather?q=${cityUrl}&APPID=${weatherKey}`
})
  .then(response => {
    const temp = response.data.main.temp - 273.15;
    const city = response.data.name;
    const weatherKey = "" + response.data.weather[0].main.toLowerCase();
    cityName.innerText = city;
    weather.innerHTML = `${icons[weatherKey]}  ${temp}&deg; C`;
  })
  .catch(error => {
    console.log(error);
  });




///////////////////////////////////////////////////////////
// date and time
time.innerText = moment().format("LT");
setInterval(() => {
time.innerText = moment().format("LT");
}, 600000);

const salutation = document.querySelector("#time h3");
const userName = "Ranen Khlabi";
let salute = "";
const saluteTime = parseInt(
  moment()
    .format("H:mm")
    .replace(":", "")
);
if (saluteTime >= 500 && saluteTime < 1200) {
  salute = "Good Morning";
} else if (saluteTime >= 1200 && saluteTime < 1800) {
  salute = "Good Afternoon";
} else {
  salute = "Good Evening";
}
salutation.innerText = `${salute}, ${userName}`;


///////////////////////////////////////////////////////////
//quote



const quote = document.querySelector("#quote h3");
const author = document.querySelector("#quote h4");

const quoteParameters = "method=getQuote&format=json&lang=en";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
axios({
  method: "GET",
  url: `${corsAnywhere}http://api.forismatic.com/api/1.0/?${quoteParameters}`
})
  .then(response => {
    console.log(response);
    const quoteText = response.data.quoteText;
    const authorName = response.data.quoteAuthor;
    quote.innerText = '"' + quoteText + '"';
    author.innerText = "—" + authorName;
  })
  .catch(error => {
    console.log(error);
  });

  