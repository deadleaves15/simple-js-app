let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    });
  }  

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
      return pokemon;
    }).catch(function(e) {
      console.error(e);
    });
  }

  /*function addListItem(pokemon) {
    let listItem = $('<li class="group-list-item"></li>');
    let button = $('<button class="pokemon-button btn btn-primary" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name + '</button>');

    listItem.append(button);
    pokemonList.append(listItem);
    listItem.find(".pokemon-button").on("click", () => {
      showDetails(pokemon);
    });
  } */

  function addListItem(pokemon) {
    let listItem = document.createElement("li");
    listItem.classList.add("group-list-item");

    let button = document.createElement("button");
    button.classList.add("pokemon-button", "btn", "btn-primary");
    button.dataset.target = "#pokemon-modal";
    button.dataset.toggle = "modal";
    button.textContent = pokemon.name;

    listItem.appendChild(button);
    document.querySelector(".pokemon-list").appendChild(listItem);
    listItem.querySelector(".pokemon-button").addEventListener("click", () => {
      this.showDetails(pokemon);
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }
  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(pokemon) {
      $('.modal-body').empty()
        .append(`<img class="pokemon-img" src="${pokemon.imageUrl}" />`)
        .append(`<p>Height: ${pokemon.height}</p>`)
        .append(`<p>Types: ${pokemon.types}</p>`);
      $('.modal-title').text(pokemon.name);
    });
  }  

  return {
    add: add,
    addListItem: addListItem,
    getAll: getAll,
    loadDetails: loadDetails,
    loadList: loadList,
    hideModal: hideModal,
    showDetails: showDetails,
  };
}());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});