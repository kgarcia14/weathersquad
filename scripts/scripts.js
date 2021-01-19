'use strict';

const apiKey = 'ba0d084c74eaed1c67211ce2db29a79f';
const generateWeather = document.querySelector('#generateWeather')

generateWeather.addEventListener('submit', event => {
    event.preventDefault();

    const inputSelectors = document.querySelector('input');
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
    });
}

function getState() {
    const url ="https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json";
    get(url).then(response => {
        buildStateList(response);
    })

    function buildStateList(responseObject) {
        let stateArray = [];
        responseObject.forEach(element => stateArray.push(element["name"]));
        addStateSelectors(stateArray)
    }

    function addStateSelectors(array1) {
        // Filter out certain state options
        const filteredArray = array1.filter(state => {
            if (state !== 'American Samoa' && state !== "Federated States Of Micronesia" && state !== "Marshall Islands" && state !== "Northern Mariana Islands" && state !== "Palau" && state !== "Virgin Islands") {
                return state;
            }
        });
        
        const stateSelect = document.querySelector("#stateInput");
        filteredArray.map(state => {
            let stateOption = document.createElement('option');
            stateOption.value = state;
            stateOption.text = state;
            stateSelect.appendChild(stateOption);
        });
    }
}

getState();

function getCountry() {
    const url ="https://restcountries.eu/rest/v2/all";
    get(url).then(response => {
        buildCountryList(response);
    })

    function buildCountryList(responseObject) {
        let countryArray = [];
        responseObject.forEach(element => countryArray.push(element["name"]));
        addCountrySelectors(countryArray);
    }

    function addCountrySelectors(array1) {
        const countrySelect = document.querySelector("#countryInput");
        array1.map(country => {
            let countryOption = document.createElement('option');
            countryOption.value = country;
            countryOption.text = country;
            countrySelect.appendChild(countryOption);
        });
    }
}

getCountry();

// Want to try to add a template literal here.
function updateBody(currentTemp, feelsLike, description, high, low) {
    const div1 = document.querySelector('#reportCurrentTemp');
    div1.innerHTML = currentTemp;
    const div2 = document.querySelector('#reportFeelsLike');
    div2.innerHTML = feelsLike;
    const div3 = document.querySelector('#reportDescription');
    div3.innerHTML = description;
    const div4 = document.querySelector('#reportHigh');
    div4.innerHTML = high;
    const div5 = document.querySelector('#reportLow');
    div5.innerHTML = low;
}