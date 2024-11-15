import { VehicleModel } from './VehicleModel';

export interface ModelsResponse {
  Count: number;
  Message: string;
  Results: VehicleModel[];
}
