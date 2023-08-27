import { useEffect, useState } from "react";

export default function useFetchFavorites(array, urlString) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () => {
    const arrayToReturn = []
    for(const index of array) {
      const url = urlString + index
      try{
        const res = await fetch(url)
        const data = await res.json()
        arrayToReturn.push(data)
      } catch(err) {
        setError(err)
      }
    }
    setData(arrayToReturn)
  }

  useEffect(() => {
    return function cleanup() {
      fetchData()
    }
  }, [])
  return {data, error}
}

