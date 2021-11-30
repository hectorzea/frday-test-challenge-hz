import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  MAKES_ERROR_RETRIEVE_RECORDS,
  MAKES,
  MODELS,
  MODELS_ERROR_RETRIEVE_RECORDS,
  VEHICLES,
  VEHICLES_ERROR_RETRIEVE_RECORDS,
} from "../constants";
import { GreenButton, GridComponent } from "./VehiloveStyledComponents";
const ErrorMessage = () => {
  const {
    selectedMake,
    selectedModel,
    loadData,
    error: { message, errorType },
  } = useContext(AppContext);

  const handleReconnect = () => {
    switch (errorType) {
      case MAKES:
        loadData(
          MAKES,
          false,
          {},
          {
            errorType: MAKES,
            message: MAKES_ERROR_RETRIEVE_RECORDS,
          }
        );
        break;
      case MODELS:
        loadData(
          MODELS,
          true,
          {
            params: {
              make: selectedMake,
            },
          },
          {
            errorType: MODELS,
            message: MODELS_ERROR_RETRIEVE_RECORDS,
          }
        );
        break;
      case VEHICLES:
        loadData(
          VEHICLES,
          true,
          {
            params: {
              make: selectedMake,
              model: selectedModel,
            },
          },
          {
            errorType: VEHICLES,
            message: VEHICLES_ERROR_RETRIEVE_RECORDS,
          }
        );
        break;
      default:
        break;
    }
  };

  return (
    <GridComponent>
      {message} <GreenButton onClick={handleReconnect}>retry</GreenButton>
    </GridComponent>
  );
};

export default ErrorMessage;
