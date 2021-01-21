'use strict';

const generateJoke = document.querySelector('#generateWeather')

generateJoke.addEventListener('submit', event => {
    event.preventDefault();
    getJoke()
})

function getJoke() {
    const url = 'https://official-joke-api.appspot.com/jokes/random';
    get(url).then(function (response) {
        updateJokeBody(response.setup, response.punchline);
        // updateJokePunch(response)
        console.log(response)
    })
}

function updateJokeBody(setup, punchline) {
    const div6 = document.querySelector('#jokeEgg');
    div6.innerHTML = `
    <h3>${setup}</h3>
    <p>${punchline}</p>`;
}
