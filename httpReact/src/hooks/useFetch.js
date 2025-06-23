import { useEffect } from 'react';
import { useState } from 'react';

export function useFetch(fetchFunc, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFunc();
        setFetchedData(data);
      } catch (error) {
        setError({message: error.message || 'Failed to fetch data'})
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFunc]);

  return {
    isFetching,
    fetchedData,
    error
  }
}