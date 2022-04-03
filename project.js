let randPoke = 1;
let pokemon = null;

function getThatPokemon(data) {
  const outputElement = document.getElementById("the_pokemon");

  let pokemon_name_html = `<h2 style="text-transform:capitalize">${pokemon.name}</h2>`;
  let pokemon_picture_html = `<img src="${pokemon.sprites.other["official-artwork"].front_default}" width="200px" alt="Image of ${pokemon.name}"></img>`;

  if (pokemon.types.length === 1) {
    pokemon_type_html = `<div style="text-transform:capitalize">Type: ${pokemon.types[0].type.name}</div>`;
  } else {
    pokemon_type_html = `<div style="text-transform:capitalize">Types: ${pokemon.types[0].type.name}, ${pokemon.types[1].type.name}</div>`;
  }

  let pokemon_html =
    pokemon_name_html + pokemon_picture_html + pokemon_type_html;

  outputElement.innerHTML = pokemon_html;
  console.log("first: ", pokemon);
}

let pokeButton = document.getElementById("theButton");
pokeButton.innerText = "Get Pokemon!";


function randomizePokemon(number) {
  number = Math.floor(Math.random() * 898) + 1;
  return number;
}

function constructUrl(integer) {
  url = `https://pokeapi.co/api/v2/pokemon/${integer}`;
}



function thisIsHowWeDo() {
  randPoke = randomizePokemon(randPoke);
  constructUrl(randPoke);
  fetch(url)
    .then((response) => response.json())
    .then((results) => {
      pokemon = results;
      console.log(pokemon);
    })
    .then(getThatPokemon);
}

thisIsHowWeDo();

document.getElementById("theButton").addEventListener("click", thisIsHowWeDo);

