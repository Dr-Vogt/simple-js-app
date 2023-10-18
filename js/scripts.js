let pokemonRepository = (function (){
    let pokemonList =[];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
   
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        button.addEventListener('click', function () {      /* added a Event listener to the button */
            showDetails(pokemon);  
    });                          
    };
        function loadList() {
            return fetch(apiUrl).then(function (response) {
            return response.json();
            }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                name: item.name,
                detailsUrl: item.url
                };
                add(pokemon);
            });
            }).catch(function (e) {
            console.error(e);
            })
      }


      function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          console.log(pokemon);
          showModal(pokemon);
        });
      }
      
      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

      function showModal(pokemon) {
        let modalContainer = document.querySelector('#modal-container');
      
      
        modalContainer.innerHTML = '';
      
        let modal = document.createElement('div');
        modal.classList.add('modal');
      
      
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
      
        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;
      
        let heightElement = document.createElement('p');
        heightElement.innerText = "Height: " + pokemon.height;
      
        function typeCount(pokemon) {
            if(pokemon.types.length === 2) {
                return pokemon.types[0].type.name + "," + pokemon.types[1].type.name;
            } else {
                return pokemon.types[0].type.name
            }
        }

        let typeElement = document.createElement("p");
        typeElement.innerText = "Type: " + typeCount(pokemon);

        let imgElement = document.createElement("img");
        imgElement.src = pokemon.imageUrl;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(heightElement);
        modal.appendChild(typeElement);
        modal.appendChild(imgElement);
        modalContainer.appendChild(modal);
      
        modalContainer.classList.add('is-visible');
      }
      
      function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
      
        modalContainer.classList.remove('is-visible');
      }
      
      window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
        }
      });
      
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });
      
      
     

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        showModal: showModal,
        hideModal: hideModal,
        loadDetails: loadDetails,
        showDetails: showDetails,
    };

})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });


pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
});   
   
   
   
   
   
   
   
   
   
   
   
   
    