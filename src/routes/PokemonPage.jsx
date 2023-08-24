import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import capitalize from "../hooks/capitalize";

export default function PokemonPage() {
  // We recuperate the id of the pokemon from the params, and then we do the API call
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${useParams().pokemonId}`
  const { data:pokemonData, error } = useFetch(pokemonUrl)
  console.log(pokemonData)
  return (
    <>
    <section>
      {/* Loading State */}
      {!pokemonData && !error &&
      <h2>Loading...</h2>}
      {/* Pokemon page */}
      {pokemonData &&
      <>
        <img src={pokemonData.sprites.front_default} alt={`Image of ${capitalize(pokemonData.name)}`} />
        <h1>This is the page of {capitalize(pokemonData.name)}</h1>
      </>
      }
      {/* Error state */}
      {error &&
      <h2>Error while fetching the data</h2>}
    </section>
    </>
  );
}
