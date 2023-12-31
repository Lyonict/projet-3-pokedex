import { useState, useEffect } from "react"

export default function FavoriteButton({ id }) {
  const [isFavorite, setIsFavorite] = useState(false)
  // Sanitize id type
  const pokemonId = parseInt(id)

  const handleClick = (e) => {
    e.preventDefault()
    let favorites = JSON.parse(localStorage.getItem("POKEDEX_FAVORITES"))
    if(favorites === null){
      favorites = []
    }
    const index = favorites.indexOf(pokemonId)
    if(index === -1) {
      favorites.push(pokemonId)
      localStorage.setItem("POKEDEX_FAVORITES", JSON.stringify(favorites))
      setIsFavorite(true)
    } else {
      favorites.splice(index, 1)
      localStorage.setItem("POKEDEX_FAVORITES", JSON.stringify(favorites))
      setIsFavorite(false)
    }
  }

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("POKEDEX_FAVORITES"))
    if(favorites !== null) {
      setIsFavorite(favorites.includes(pokemonId))
    }
  }, [pokemonId])


  return (
    <button key={pokemonId} className={"btn " + (isFavorite ? "btn-danger" : "btn-light")} onClick={handleClick}>{isFavorite ? "Added" : "Add"}</button>
  )
}
