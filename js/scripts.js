let pokemonList = [
        {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
        {name: 'Charmander', height: 0.6, type: 'Fire'},
        {name: 'Squirtle', height: 0.5, type: 'Water'},
        {name: 'Snorlax', height: 2.1, type: 'Normal'},
        {name: 'Onix', height: 8.8, type: ['Rock', 'Ground']},
        {name: 'Arbok', height: 3.5, type: 'Poison'},
        {name: 'Pikachu', height: 0.4, type: 'Electric'},
    ];

/* create a for loop that iterates over each item in pokemonList */
/* Use document.write() inside the loop’s code to write the Pokémon name on your website’s DOM */
/* Use what you’ve learned about adding strings in JavaScript to write the Pokémon’s height next to its name, for example, “Bulbasaur (height: 7)” */
/* Within the loop, add a conditional, should check if the height is above a certain value. If it is, add the note “Wow, that’s big!” */

/*if (height >= 2.0) {
    document.write('Wow, that’s big!');
  } else (height <= 2.0) {
    document.write('You are just a little guy!');
  } 
  */

  for (let i=0; i > pokemonList.height; i++) {
    if (pokemonList[i].height >= 2.0){
        document.write(pokemonList[i].name + " height: " + pokemonList[i].height + "Wow, that's big!" + '<br>');
    }
    else {
        document.write(pokemonList[i].name + " height: " + pokemonList[i].height + '<br>');
    }
  }