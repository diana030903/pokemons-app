import React, { useEffect, useState } from "react"

const PokemonPage = ({ id, onBack }) => {
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Ошибка загрузки покемона:", error))
  }, [id])

  if (!pokemon) {
    return <p>Загрузка...</p>
  }

  return (
    <div>
      <button onClick={onBack}>Назад</button>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: "200px" }}
      />
      <p>Вес: {pokemon.weight}</p>
      <p>Рост: {pokemon.height}</p>
      <p>Типы:</p>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonPage