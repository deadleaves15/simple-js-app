let pokemonRepository = (function () {
  let pokemonList = [
  {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
  {name: 'Charmander', height: 0.6, type: 'Fire'},
  {name: 'Squirtle', height: 0.5, type: 'Water'},
  {name: 'Snorlax', height: 2.1, type: 'Normal'},
  {name: 'Onix', height: 8.8, type: ['Rock', 'Ground']},
  {name: 'Arbok', height: 3.5, type: 'Poison'},
  {name: 'Pikachu', height: 0.4, type: 'Electric'}];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('name-button');
    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();


pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});