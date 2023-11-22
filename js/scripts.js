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
        pokemonList.classList.add('list-group-item'); 
        pokemonList.classList.add('col-12'); 
        pokemonList.classList.add('col-md-4'); 
        let button = document.createElement("button");
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#modal');
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        button.addEventListener('click', function () {      
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
          item.abilities = details.abilities;
        }).catch(function (e) {
          console.error(e);
        });
      }


      function showModal(pokemon) {
        let modalBody = document.querySelector('.modal-body');
        let modalTitle = document.querySelector('.modal-title')
      
         modalBody.innerHTML = ''; 
         modalTitle.innerHTML= '';
      
        let modal = document.createElement('div');
        modal.classList.add('modal');
      
      
        /*let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
       /* closeButtonElement.addEventListener('click', hideModal); */
      
        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;
      
        let heightElement = document.createElement('p');
        heightElement.innerText = "Height: " + pokemon.height;
      
        console.log(pokemon.types)
        console.log((pokemon.types||[]).map(aob=> aob.type.name).join(", "));
        

        let typeElement = document.createElement("p");
        typeElement.innerText = "Type: " + (pokemon.types||[]).map(aob=> aob.type.name).join(", ")

        let imgElement = document.createElement("img");
        imgElement.classList.add('modal-img');
        imgElement.src = pokemon.imageUrl;

        let abilitiesElement = document.createElement('p')
        abilitiesElement.innerText = "Abilities: " + (pokemon.abilities||[]).map(ab => ab.ability.name).join(",");
        console.log(pokemon.abilities)
        
       /* modal.appendChild(closeButtonElement); */
        modalTitle.appendChild(titleElement);
        modalBody.appendChild(heightElement);
        modalBody.appendChild(typeElement);
        modalBody.appendChild(imgElement);
        modalBody.appendChild(abilitiesElement)
        /*modalBody.appendChild(modal); */
      
        /*modalContainer.classList.add('is-visible');*/
      }
      
      /* function hideModal() {
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
      }); */
      
      
     

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        showModal: showModal,
      //  hideModal: hideModal,
        loadDetails: loadDetails,
        showDetails: showDetails,
    };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });


pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
});   
   
   
   
   
   
   
   
   
   
   
   
   
    