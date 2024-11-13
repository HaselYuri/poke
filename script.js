// script.js
function getPokemon() {
    const pokeName = document.getElementById("pokeName").value.toLowerCase();
  
    if (!pokeName) {
      alert("Por favor, digite o nome de um Pokémon!");
      return;
    }
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Pokémon não encontrado!");
        }
        return response.json();
      })
      .then(data => {
        document.getElementById("pokemonName").textContent = data.name.toUpperCase();
        document.getElementById("pokemonImage").src = data.sprites.front_default;
        document.getElementById("pokemonType").textContent = `Tipo: ${data.types.map(type => type.type.name).join(', ')}`;
        document.getElementById("pokemonHeight").textContent = `Altura: ${data.height / 10} m`;
        document.getElementById("pokemonWeight").textContent = `Peso: ${data.weight / 10} kg`;
      })
      .catch(error => {
        alert(error.message);
      });
  }

function playGame(){
    i=0
    while (i<3){
        teste = Math.floor(Math.random() * 1025) + 1;

        i+=1
        console.log(teste)
    }

}
  