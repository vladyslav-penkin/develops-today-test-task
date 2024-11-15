import { useEffect, useState } from 'react';
import { fetchMakes } from '@/lib/api';
import { MakesResponse } from '@/types/MakesResponse';

export const useFetchMakes = () => {
  const [makes, setMakes] = useState<MakesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('API_BASE_URL:', process.env.API_BASE_URL);
        const data = await fetchMakes();
        setMakes(data);
      } catch {
        setError('Failed to fetch vehicles');
      }
    };

    fetchData();
  }, []);

  return { data: makes?.Results, error };
};
