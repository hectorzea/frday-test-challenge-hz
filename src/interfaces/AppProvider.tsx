export interface IError {
  errorType?: string;
  message?: string;
}
export interface IParams {
  param: string;
}

export interface IVehicle {
  make: string;
  model: string;
  enginePowerPS: number;
  enginePowerKW: number;
  fuelType: string;
  bodyType: string;
  engineCapacity: number;
}
