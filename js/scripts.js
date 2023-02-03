let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
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

  function showDetailsModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalBody.empty();
    modalTitle.text(pokemon.name);

    let height = $(`${'<p>' + 'Height:  '}${pokemon.height}</p>`);
    let image = $(`<img class="pokemon-img" src="${pokemon.imageUrl}" />`);
    let types = $(`${'<p>' + 'Types:  '}${pokemon.types}</p>`);

    modalBody.append(image);
    modalBody.append(height);
    modalBody.append(types);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(pokemon) {
      showDetailsModal(pokemon);
    });
  }

  function addListItem(pokemon) {
    let listItem = $('<li class="group-list-item"></li>');
    let button = $(`<button class="pokemon-button btn btn-primary" data-target="#pokemon-modal" data-toggle="modal"">${pokemon.name}</button>`);

    listItem.append(button);
    pokemonList.append(listItem);
    button.on('click', () => {
      showDetails(pokemon);
    });
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

  /* Modal mania mayhem */

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


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showDetailsModal: showDetailsModal,
    hideModal: hideModal
  };
})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});