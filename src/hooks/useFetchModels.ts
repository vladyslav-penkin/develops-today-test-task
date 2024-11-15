import { useState, useEffect } from 'react';
import { VehicleModel } from '@/types/VehicleModel';
import { ModelsResponse } from '@/types/ModelsResponse';
import { fetchModels } from '@/lib/api';
import { Params } from '@/types/Params';

interface UseFetchModelsResult {
  data: VehicleModel[];
  error: string | null;
  isLoading: boolean;
}

export function useFetchModels(params: Params): UseFetchModelsResult {
  const [models, setModels] = useState<VehicleModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const { makeId, year } = await params;
      if (!makeId || !year) return;
      setIsLoading(true);
      setError(null);

      try {
        const data: ModelsResponse = await fetchModels(makeId, year);
        setModels(data.Results);
      } catch {
        setError('Failed to fetch vehicle models.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return { data: models, error, isLoading };
}
