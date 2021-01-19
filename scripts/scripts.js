'use strict';

const apiKey = 'ba0d084c74eaed1c67211ce2db29a79f';
const generateWeather = document.querySelector('#generateWeather')

generateWeather.addEventListener('submit', event => {
    event.preventDefault();

    const inputSelectors = document.querySelectorAll('input');
    const placeholders = document.querySelectorAll('.location_placeholder');

    let inputArray = [];
    inputSelectors.forEach(inputItem => {
        inputArray.push(inputItem);
    })

    // Need to update to pull city and country from API (not user input).
    // As far as printing the state, might could pull from separate API.
    placeholders.forEach(function (placeholders, index) {
        placeholders.innerHTML = inputArray[index].value;
        getWeather(inputArray[0].value, inputArray[1].value, inputArray[2].value)
    })
});

function getWeather(city, state, country) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=${apiKey}`;
    get(url).then(response => {
        updateBody(response.main.temp, response.main.feels_like, response.weather[0].description, response.main.temp_max, response.main.temp_min)
        console.log(response)
    });
    console.log(url);
}


// Want to try to add a template literal here.
function updateBody(currentTemp, feelsLike, description, high, low) {
    const div1 = document.querySelector('#reportCurrentTemp');
    div1.innerHTML = (currentTemp + "<sup>°F</sup>");
    const div2 = document.querySelector('#reportFeelsLike');
    div2.innerHTML = (feelsLike + "<sup>°F</sup>");
    const div3 = document.querySelector('#reportDescription');
    div3.innerHTML = description;
    const div4 = document.querySelector('#reportHigh');
    div4.innerHTML = (high + "<sup>°F</sup>");
    const div5 = document.querySelector('#reportLow');
    div5.innerHTML = (low + "<sup>°F</sup>");
}