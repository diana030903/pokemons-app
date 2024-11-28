import { useState } from "react"
import PokemonsList from "./PokemonsList"
import PokemonPage from "./PokemonPage"

const App = () => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null)

  return (
    <div>
      {selectedPokemonId === null ? (
        <PokemonsList onSelectPokemon={(id) => setSelectedPokemonId(id)} />
      ) : (
        <PokemonPage
          id={selectedPokemonId}
          onBack={() => setSelectedPokemonId(null)}
        />
      )}
    </div>
  )
}

export default App