import { IError, IVehicle } from "./AppProvider";

export interface IAppContext {
  make: string;
  makes: string[];
  model: string;
  models: string[];
  vehicles: IVehicle[];
  error: IError;
  selectedMake: string;
  selectedModel: string;
  selectedVehicle?: any;
  searchMake: (make: string) => void;
  searchModel: (model: string) => void;
  selectMake: (make: string) => void;
  selectModel: (model: string) => void;
  selectVehicle: (vehicle: any) => void;
  loadData: (
    entity: string,
    hasParams: boolean,
    paramsObject?: Object,
    errorObject?: IError
  ) => void;
}
