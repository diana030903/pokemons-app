import { useEffect, useState } from "react"

const PokemonsList = ({ onSelectPokemon }) => {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error("Ошибка загрузки покемонов:", error))
  }, [])

  return (
    <div>
      <h1>Список покемонов</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            {}
            <button onClick={() => onSelectPokemon(index + 1)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonsList