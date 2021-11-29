import { useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
const useAutocomplete = () => {
  const {
    searchMake,
    make,
    makes,
    selectMake,
    searchModel,
    selectModel,
    model,
    models,
  } = useContext(AppContext);
  const [showMakeSuggestions, setShowMakeSuggestions] =
    useState<boolean>(false);
  const [showModelSuggestions, setShowModelSuggestions] =
    useState<boolean>(false);
  const [filteredMakes, setFilteredMakes] = useState<string[]>([]);
  const [filteredModels, setFilteredModels] = useState<string[]>([]);

  useEffect(() => {
    const newMakeSuggestions = makes.filter((makeSuggestion) =>
      makeSuggestion.toLowerCase().includes(make.toLowerCase())
    );
    setFilteredMakes(newMakeSuggestions);
  }, [make, makes]);

  useEffect(() => {
    const newModelSuggestions = models.filter((modelSuggestion) =>
      modelSuggestion.toLowerCase().includes(model.toLowerCase())
    );
    setFilteredModels(newModelSuggestions);
  }, [model, models]);

  const onClick = (value: string, type: string) => {
    switch (type) {
      case "make":
        setShowMakeSuggestions(false);
        selectMake(value);
        searchMake(value);
        break;
      case "model":
        setShowModelSuggestions(false);
        selectModel(value);
        searchModel(value);
        break;
      default:
        break;
    }
  };

  const onFocus = () => {
    setShowModelSuggestions(true);
  };

  const onBlur = () => {
    setShowModelSuggestions(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    switch (type) {
      case "make":
        selectMake("");
        searchMake(e.target.value);
        setShowMakeSuggestions(true);
        break;
      case "model":
        selectModel("");
        searchModel(e.target.value);
        setShowModelSuggestions(true);
        break;
      default:
        break;
    }
  };

  return {
    filteredMakes,
    filteredModels,
    showMakeSuggestions,
    showModelSuggestions,
    onClick,
    onChange,
    onFocus,
    onBlur,
  };
};

export default useAutocomplete;
