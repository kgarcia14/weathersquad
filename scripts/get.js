'use strict';

function get(url) {
    // Step 1: Ask for the data
    return fetch(url)
    // Step 2: get a response, ask for the response for the JSON, return the JSON
    .then(function (response) {
        return response.json();
    })
    // Step 3: Do Stuff with the data from the JSON
    .then(data => {
        return data;
    })
    // Step 4: Make sure any errors are flagged.
    .catch(error => {
        console.error("ERROR:", error);
        return error;
    });
};