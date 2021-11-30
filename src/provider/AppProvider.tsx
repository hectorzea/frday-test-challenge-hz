import { useState, FC } from "react";
import AppContext, { appContextDefaultValues } from "../context/AppContext";
import { vehicleAPI } from "../api/vehicleAPI";
import { IError, IVehicle } from "../interfaces/AppProvider";
import { SERVER_DOWN } from "../constants";

const AppProvider: FC = ({ children }) => {
  const [error, setError] = useState<IError>(appContextDefaultValues.error);
  const [make, setMake] = useState<string>(appContextDefaultValues.make);
  const [makes, setMakes] = useState<string[]>(appContextDefaultValues.makes);
  const [model, setModel] = useState<string>(appContextDefaultValues.model);
  const [models, setModels] = useState<string[]>(
    appContextDefaultValues.models
  );
  const [selectedMake, setSelectedMake] = useState<string>(
    appContextDefaultValues.selectedMake
  );

  const [selectedModel, setSelectedModel] = useState<string>(
    appContextDefaultValues.selectedModel
  );

  const [vehicles, setVehicles] = useState<IVehicle[]>(
    appContextDefaultValues.vehicles
  );

  const [selectedVehicle, setSelectedVehicle] = useState<IVehicle | undefined>(
    appContextDefaultValues.selectedVehicle
  );

  const searchMake = (make: string) => setMake(make.toUpperCase());
  const selectMake = (selectedMake: string) => {
    setSelectedMake(selectedMake);
  };

  const selectModel = (selectedModel: string) => {
    setSelectedModel(selectedModel.toUpperCase());
  };

  const selectVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
  };

  const searchModel = (model: string) => setModel(model.toUpperCase());

  const loadData = async (
    entity: string,
    hasParams: boolean,
    paramsObject?: Object,
    errorObject?: IError
  ) => {
    try {
      const response = await vehicleAPI.get<string[] & IVehicle[]>(
        entity,
        hasParams ? paramsObject : {}
      );
      switch (entity) {
        case "makes":
          setMakes(response.data);
          break;
        case "models":
          setModels(response.data);
          break;
        case "vehicles":
          setVehicles(response.data);
          break;
        default:
          break;
      }
      setError({
        errorType: "",
        message: "",
      });
    } catch (error: any) {
      if (error.message === "Network Error") {
        setError({
          errorType: "makes",
          message: SERVER_DOWN,
        });
      } else {
        setError({
          errorType: errorObject?.errorType,
          message: errorObject?.message,
        });
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        make,
        makes,
        model,
        models,
        vehicles,
        error,
        selectedMake,
        searchMake,
        loadData,
        selectMake,
        searchModel,
        selectModel,
        selectedModel,
        selectedVehicle,
        selectVehicle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
