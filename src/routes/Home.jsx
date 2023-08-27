import PokemonCardList from '../components/PokemonCardList'
import useFetch from '../hooks/useFetch'

export default function Home() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0"
  const {data:pokemonData, error} = useFetch(url)

  return (
    <>
    {pokemonData &&
      <PokemonCardList pokemonData={pokemonData.results} error={error}/>
    }
    </>
  )
}
