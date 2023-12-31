import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import capitalize from "../hooks/capitalize";

import './PokemonPage.scss'

export default function PokemonPage() {
  // We recuperate the id of the pokemon from the params, and then we do the API call
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${useParams().pokemonId}`
  const { data:pokemonData, error } = useFetch(pokemonUrl)

  return (
    <>
      {/* Loading State */}
      {!pokemonData && !error &&
      <h2>Loading...</h2>}
      {/* Pokemon page */}
      {pokemonData &&
      <div className={`theme-${pokemonData.types[0].type.name}`}>
        <section className="pokemon-opening-info">
          <div className="py-3 mb-3 pokemon-header">
            <h1 className="text-white">{capitalize(pokemonData.name)}</h1>
          </div>
          {/* Pokemon Stats */}
          <div className="container d-flex flex-column flex-sm-row pokemon-stats">
            <img src={pokemonData.sprites.front_default} alt={`Image of ${capitalize(pokemonData.name)}`} className="flex-grow-1" />
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-between">
                <ul className="pokemon-types-container">
                  {pokemonData.types.map((type) => {
                    return (
                      <li key={type.slot} className={`py-1 px-3 me-2 fw-bold type-badge ${type.type.name}-badge`}>{type.type.name}</li>
                    )
                  })}
                </ul>
                <h3>#{pokemonData.id}</h3>
              </div>
              <div className="pokemon-stat-array">
                <ul>
                  {pokemonData.stats.map((stat) => {
                    return (
                      <li key={stat.stat.name} className="d-flex justify-content-between">
                        <h4>{stat.stat.name}</h4>
                        <div>
                          <span>{stat.base_stat}</span>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      }
      {/* Error state */}
      {error &&
      <h2>Error while fetching the data</h2>}
    </>
  );
}
