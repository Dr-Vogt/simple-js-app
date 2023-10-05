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

pokemonList.forEach(function( pokemon){
    if (pokemon.height > 200) {
      document.write(`<div>
        ${pokemon.name} (height: ${pokemon.height} cm) - Wow that's huge!</div>`
      );
    } else if (pokemon.height) {
      document.write(
        `<div> ${pokemon.name} (height: ${pokemon.height} cm) </div>`);
    }
  })

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
