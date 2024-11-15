import { MakesResponse } from '@/types/MakesResponse';
import { ModelsResponse } from '@/types/ModelsResponse';

export const fetchMakes = async (): Promise<MakesResponse> => {
  const response = await fetch(
    `${process.env.API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch cars.');
  }

  const data: MakesResponse = await response.json();
  return data;
};

export const fetchModels = async (
  makeId: string,
  year: string
): Promise<ModelsResponse> => {
  const response = await fetch(
    `${process.env.API_BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle models.');
  }

  const data: ModelsResponse = await response.json();
  return data;
};
