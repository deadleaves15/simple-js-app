let pokemonList = [
        {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
        {name: 'Charmander', height: 0.6, type: 'Fire'},
        {name: 'Squirtle', height: 0.5, type: 'Water'},
        {name: 'Snorlax', height: 2.1, type: 'Normal'},
        {name: 'Onix', height: 8.8, type: ['Rock', 'Ground']},
        {name: 'Arbok', height: 3.5, type: 'Poison'},
        {name: 'Pikachu', height: 0.4, type: 'Electric'},
    ];

for (let i=0; i<pokemonList.length; i++) {
  if (pokemonList[i].height >= 2.0){
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!" + "<br>");
  }
  else {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + "<br>")
  }
}