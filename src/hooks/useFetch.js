import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)

  useEffect(() => {
    return function cleanup() {
      const fetchData = () => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => setError(error))
      }

      fetchData()
    }
  }, [url]);

  return {data, error}
}
