import React, { useEffect, useContext } from "react";
import { InputLabelContainer } from "./VehiloveStyledComponents";
import { VehiloveInput, ListContainer } from "./VehiloveStyledComponents";
import AppContext from "../context/AppContext";
import Suggestion from "./Suggestion";
import NoDataMessage from "./NoDataMessage";
import useAutocomplete from "../hooks/useAutocomplete";
import ErrorMessage from "./ErrorMessage";
import {
  MODELS,
  MODELS_ERROR_RETRIEVE_RECORDS,
  MODELS_NOT_FOUND_MAKE,
} from "../constants";
const Models = () => {
  const {
    selectedMake,
    selectedModel,
    loadData,
    models,
    model,
    error: { errorType },
  } = useContext(AppContext);
  const {
    onChange,
    onFocus,
    onBlur,
    onClick,
    showModelSuggestions,
    filteredModels,
  } = useAutocomplete();

  useEffect(() => {
    if (selectedMake) {
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
    }
  }, [selectedMake]);
  return errorType === MODELS ? (
    <ErrorMessage />
  ) : models.length === 0 ? (
    <NoDataMessage message={MODELS_NOT_FOUND_MAKE} />
  ) : (
    <InputLabelContainer>
      <span>
        &#129300;Have you thought about which model to choose? &#129300;
      </span>
      <VehiloveInput
        data-testid="model-input"
        type="text"
        value={model}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e, "model");
        }}
        onFocus={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onFocus();
        }}
        onBlur={onBlur}
      />
      {showModelSuggestions && !selectedModel && (
        <ListContainer>
          {filteredModels.map((modelSuggestion, key) => (
            <Suggestion
              onClick={onClick}
              value={modelSuggestion}
              filterValue={model}
              key={`model-${key}`}
              type={"model"}
            />
          ))}
        </ListContainer>
      )}
    </InputLabelContainer>
  );
};

export default Models;
