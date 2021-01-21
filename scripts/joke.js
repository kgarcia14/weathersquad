'use strict';

function getJoke() {
    const masterDiv = document.querySelector('#reportEasterEgg');
    masterDiv.style.display = "initial";
    const div6 = document.querySelector('#eggDiv');
    div6.innerHTML = `
    <h3>Looks like it is dreary out. How about a joke to brighten your day?</h3>
    <form>
    <button type="submit" id="btnJ">Tell me a joke</button>
    </form>`;
}
const generateJoke = document.querySelector('#eggDiv')

generateJoke.addEventListener('submit', event => {
    event.preventDefault();
    getJoke2()
})

function getJoke2() {
    const url = 'https://official-joke-api.appspot.com/jokes/random';
    get(url).then(function (response) {
        updateJokeBody(response.setup, response.punchline);
        // updateJokePunch(response)
        console.log(response)
    })
}

function updateJokeBody(setup, punchline) {
    const div7 = document.querySelector('#eggDiv');
    div7.innerHTML = `
    <h3>Looks like it is dreary out. How about a joke to brighten your day?</h3>
    <button type="submit" id="btnJ">Tell me a joke</button>
    <h4>${setup}</h4>
    <p>${punchline}</p>`;
}
