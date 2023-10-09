let pokemonRepository = (function (){
    let pokemonList = [
        {name: 'Bulbasaur', height: 74, types: ['Grass','Poison'], ability: ['Overgrow', 'Chlorophyll'] },
        {name: 'Ivysaur', height: 101, types: ['Grass','Poison'], ability: ['Overgrow', 'Chlorophyll'] },
        {name: 'Venusaur', height: 204, types: ['Grass','Poison'], ability: ['Overgrow', 'Chlorophyll'] },
        {name: 'Charmander', height: 60, types: ['Fire'], ability: ['Blaze', 'Solar Power'] },
        {name: 'Charmeleon', height: 113, types: ['Fire'], ability: ['Blaze', 'Solar Power'] },
        {name: 'Charizard', height: 174, types: ['Fire', 'Flying'], ability: ['Blaze', 'Solar Power'] },
        {name: 'Squirtle', height: 55, types: ['Water'], ability: ['Torrent', 'Rain Dish'] },
        {name: 'Wartortle', height: 101, types: ['Water'], ability: ['Torrent', 'Rain Dish'] },
        {name: 'Blastoise', height: 162, types: ['Water'], ability: ['Torrent', 'Rain Dish'] },
        {name: 'Caterpie', height: 30, types: ['Bug'], ability: ['Shield Dust', 'Run Away'] },
        {name: 'Metapod', height: 73, types: ['Bug'], ability: ['Shed Skin'] },
        {name: 'Butterfree', height: 113, types: ['Bug', 'Flying'], ability: ['Compound Eyes', 'Tinted Lens'] },
        {name: 'Weedle', height: 29, types: ['Bug', 'Poison'], ability: ['Shield Dust', 'Run Away'] },
        {name: 'Kakuna', height: 60, types: ['Bug', 'Poison'], ability: ['Shed Skin'] },
        {name: 'Beedrill', height: 101, types: ['Bug', 'Poison'], ability: ['Swarm', 'Sniper'] },

];
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
    }

    function showDetails(pokemon) {                        
            console.log(pokemon);
        };

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };

})();




pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
});   
   
   
   
   
   
   
   
   
   
   
   
   
    /* if (pokemon.height > 200) {
      document.write(`<div>
        ${pokemon.name} (height: ${pokemon.height} cm) - Wow that's huge!</div>`
      );
    } else if (pokemon.height) {
      document.write(
        `<div> ${pokemon.name} (height: ${pokemon.height} cm) </div>`);
    }
  })*/

/*for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 200) {
      document.write(
        pokemonList[i].name +
          " (height: " +
          pokemonList[i].height +
          " cm)" +
          "Wow that's huge!"
      );
    } else if (pokemonList[i].height) {
      document.write(
        pokemonList[i].name +
          " (height: " +
          pokemonList[i].height +
          " cm)"   
      );
    } 
     
  }*/
