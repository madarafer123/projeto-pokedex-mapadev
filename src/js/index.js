// Select all Pokémon list items
const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
console.log(listaSelecaoPokemons); // Log the selected Pokémon list items

// Select all Pokémon cards
const pokemonsCard = document.querySelectorAll(".cartao-pokemon");

// Add a click event listener to each Pokémon in the list
listaSelecaoPokemons.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    console.log(pokemon); // Log the clicked Pokémon

    // Find the currently opened Pokémon card and remove the 'aberto' class
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto");

    // Get the ID of the selected Pokémon from the clicked element
    const idPokemonSelecionado = pokemon.attributes.id.value;

    // Create the ID for the card to be opened
    const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;

    // Select the card that corresponds to the selected Pokémon using its ID
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);

    // Add the 'aberto' class to the card that corresponds to the selected Pokémon
    cartaoPokemonParaAbrir.classList.add("aberto");

    // Find the currently active Pokémon in the listing and remove the 'ativo' class
    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");

    // Find the selected Pokémon in the listing and add the 'ativo' class
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add("ativo");
  });
});
