import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = () => {
      setIsPending(true)
      fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      setIsPending(false)
    }

    fetchData()
  }, [url]);

  return {data, isPending, error}
}
