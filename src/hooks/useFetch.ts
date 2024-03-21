import axios, { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = <T>(
  url: string,
  payload: any
): { data: T | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.post(url, payload);

        setData(response.data);
      } catch (error) {
        if (isAxiosError(error)) {
          setError(error.response?.data.error);
        }
      }
      setLoading(false);
    }

    fetchData();
  }, [url, payload]);

  return { data, loading, error };
};
