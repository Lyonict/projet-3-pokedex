import { useEffect } from 'react'
// React import
import { Link } from 'react-router-dom'
// Hooks
import capitalize from '../hooks/capitalize'
// Components
import FavoriteButton from './FavoriteButton'

export default function PokemonCardList({pokemonData, error}) {

  return (
    <section className="container pokemon-cards-section">
      <ul className="list-unstyled row g-3 pokemon-cards-list">
        {/* Loading state */}
        {!pokemonData && !error &&
        <h2>Loading...</h2>}
        {/* Pokemon card */}
        {pokemonData &&
        pokemonData.map((pokemon) => {
          const pokemonId = getPokemonId(pokemon)
          return(
            <li key={pokemon.name} className='col-12 col-sm-4 col-md-3 col-lg-2'>
              <Link to={`pokemon/${pokemonId}`} className="h-100 p-0 card">
                <div className="card-body">
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={`Image of ${pokemon.name}`} />
                  <h5 className='card-title'>{capitalize(pokemon.name)}</h5>
                  <FavoriteButton id={pokemonId} />
                </div>
              </Link>
            </li>
          )
        })
        }
        {/* Error state */}
        {error &&
        <h2>Error while fetching the data</h2>}
      </ul>
    </section>
  )
}

// Recuperate the pokemon's ID through it's url
// Avoid an API call just to get the path for each pkmon img
const getPokemonId = (pokemonData) => {
  // Capture the id at the very end of the url
  if(pokemonData.url !== undefined) {
    const pokemonUrl = pokemonData.url
    const regex = /pokemon\/(\d*)/
    const pokemonId = pokemonUrl.match(regex)[1]
    return pokemonId
  } else if(pokemonData.id !== undefined) {
    pokemonData.id
    return pokemonData.id
  }
}
