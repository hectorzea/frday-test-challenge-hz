import React from "react";
import { IAppContext } from "../interfaces/App";

export const appContextDefaultValues = {
  make: "",
  makes: [],
  model: "",
  models: [],
  vehicles: [],
  error: {
    errorType: "",
    message: "",
  },
  selectedVehicle: undefined,
  selectedMake: "",
  selectedModel: "",
  selectMake: () => {},
  searchMake: () => {},
  searchModel: () => {},
  selectModel: () => {},
  selectVehicle: () => {},
  loadData: () => {},
};

const AppContext = React.createContext<IAppContext>(appContextDefaultValues);

export default AppContext;
