import { useEffect, useContext } from "react";
import { Container, Title } from "./components/VehiloveStyledComponents";

import Makes from "./components/Makes";
import Models from "./components/Models";
import Vehicles from "./components/Vehicles";
import SelectedVehicle from "./components/SelectedVehicle";
import { MAKES, MAKES_ERROR_RETRIEVE_RECORDS } from "./constants";

import AppContext from "./context/AppContext";
export const App = () => {
  const { selectedMake, selectedModel, loadData, selectedVehicle } =
    useContext(AppContext);

  useEffect(() => {
    loadData(
      MAKES,
      false,
      {},
      {
        errorType: MAKES,
        message: MAKES_ERROR_RETRIEVE_RECORDS,
      }
    );
  }, []);

  return (
    <Container>
      <Title>Vehilove APP</Title>
      {selectedVehicle ? (
        <SelectedVehicle />
      ) : (
        <>
          <Makes />
          {selectedMake && <Models />}
          {selectedMake && selectedModel && <Vehicles />}
        </>
      )}
    </Container>
  );
};
