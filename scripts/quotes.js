'use strict';

const clearDayQuote = "'Keep your face to the sun and you will never see the shadows.' - Helen Keller"

const clearNightQuote = "'Mortal as I am, I know that I am born for a day. But when I follow at my pleasure the serried multitude of the stars in their circular course, my feet no longer touch the earth.' - Ptolemy"

const cloudyQuote = "'A cloudy morning does not signify that the entire day is gonna be rainy! What's pressing you down today has nothing to change about your great future! Let patience be your inspiration.' - Israelmore Ayivor"

const cloudyNightQuote = "'On a cloudy night, when nothing seems above, still, there is love.  Always love. For something from someone It's never done. Never. - Deepak Rana'"

const mistQuote = "'Knowledge is soon changed, then lost in the mist, an echo half-heard.' - Gene Wolfe"

const overcastQuote = "'A cloudy day is no match for a sunny disposition.' - William Arthur Ward"

const partlyCloudyDayRainQuote = "'Love like rain, can nourish from above, drenching couples with a soaking joy. But sometimes under the angry heat of life, love dries on the surface and must nourish from below, tending to its roots keeping itself alive.' - Paulo Coelho"

const partlyCloudyDayQuote = "'Sometimes the clouds in the sky are mistaken. They didn’t come to block the sunlight. They came to embrace it. ― Kaylee Stepkoski'"

const partlyCloudyNightRainQuote = "'Let's just sit quietly and listen to the secrets the rain wants to tell us.' - Jack Kerouac"

const partlyCloudyNightQuote = "'Don't forget: Beautiful sunsets need cloudy Skies.' -Paulo Coelho"

const rainQuote = "'The nicest thing about the rain is that it always stops. Eventually.' - Eeyore"

const snowQuote = "The snow doesn't give a soft white damn whom it touches.' - E.E. Cummings"

const thunderstormQuote = "'A Cue from Nature... Run outside during a thunderstorm. That downpour, that conquered hesitation, that exhilaration. That’s what unlonely is like.' - David Levithan"

function updateQuoteBody(iconCode) {
    if (iconCode === "01d") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = clearDayQuote;
    };
    if (iconCode === "01n") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = clearNightQuote;
    };
    if (iconCode === "02d") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = partlyCloudyDayQuote;
    };
    if (iconCode === "02n") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = partlyCloudyNightQuote;
    };
    if (iconCode === "03d") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = cloudyQuote;
    };
    if (iconCode === "03n") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = cloudyNightQuote;
    };
    if (iconCode === "04d") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = overcastQuote;
    };
    if (iconCode === "04n") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = overcastQuote;
    };
    if (iconCode === "09d") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = rainQuote;
    };
    if (iconCode === "09n") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = rainQuote;
    };
    if (iconCode === "10d") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = partlyCloudyDayRainQuote;
    };
    if (iconCode === "10n") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = partlyCloudyNightRainQuote;
    };
    if (iconCode === "11d") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = thunderstormQuote;
    };
    if (iconCode === "11n") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = thunderstormQuote;
    };
    if (iconCode === "13d") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = snowQuote;
    };
    if (iconCode === "13n") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = snowQuote;
    };
    if (iconCode === "50d") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = mistQuote;
    };
    if (iconCode === "50n") {
        const div4 = document.querySelector('#quote');
        div4.innerHTML = mistQuote;
    };
}