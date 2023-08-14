document.getElementById("button").addEventListener("click", function() {

const randomPokemonID = Math.floor(Math.random() * 898) + 1;
const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonID}`;
let data;

fetch(url) 
.then (function(response) {
    return response.json();
})
.then(function(myJson) {
    let userData = myJson;
    let replaceHTML = document.getElementById("replace");
    replaceHTML.innerText = "Your name is " + userData.name

    // let pElement = document.createElement("p");
    // pElement.innerText = userData.name;
    // document.body.appendChild(pElement);
    // return userData.name
});



});