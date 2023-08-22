
// Hooks
import useFetch from '../hooks/useFetch'
import capitalize from '../hooks/capitalize'

export default function PokemonCardList() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0"
  const {data:pokemonData, error} = useFetch(url)
  console.log(pokemonData)

  return (
    <section className="container pokemon-cards-section">
      <ul className="list-unstyled row g-3 pokemon-cards-list">
        {/* Loading state */}
        {!pokemonData && !error &&
        <h2>Loading...</h2>}
        {/* Pokemon card */}
        {pokemonData &&
        pokemonData.results.map((pokemon) => {
          return(
            <li key={pokemon.name} className='col-12 col-sm-4 col-md-3 col-lg-2'>
              <a href='#' className="h-100 p-0 card">
                <div className="card-body">
                  <img src={getPokemonId(pokemon.url)} alt={`Image of ${pokemon.name}`} />
                  <h5 className='card-title'>{capitalize(pokemon.name)}</h5>
                </div>
              </a>
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
const getPokemonId = (pokemonUrl) => {
  // Capture the id at the very end of the url
  const regex = /pokemon\/(\d*)/
  const pokemonId = pokemonUrl.match(regex)[1]
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
}