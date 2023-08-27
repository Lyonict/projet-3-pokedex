import useFetchFavorites from "../hooks/useFetchFavorites"

import PokemonCardList from "../components/PokemonCardList"

export default function PokedexPage() {
  const favoritesPokemons = JSON.parse(localStorage.getItem("POKEDEX_FAVORITES"))
  const {data:favoritesData, error} = useFetchFavorites(favoritesPokemons, "https://pokeapi.co/api/v2/pokemon/")


  return (
    <>
      <div>This is the page of the pokedex</div>
      {favoritesData &&
        <PokemonCardList pokemonData={favoritesData} error={error}/>
      }
    </>
  )
}
