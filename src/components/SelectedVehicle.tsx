import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  SelectedVehicleContainer,
  SelectedVehicleButtonsContainer,
  GreenButton,
} from "../components/VehiloveStyledComponents";
import {
  THANKS_SELECT_VEHICLE,
  VEHICLE_MAKE,
  GO_BACK_VEHICLES,
  BUY_VEHICLE,
  VEHICLE_MODEL,
  VEHICLE_BODY_TYPE,
  VEHICLE_FUEL_TYPE,
  ENGINE_POWER_PS,
  ENGINE_POWER_KW,
} from "../constants";
const SelectedVehicle = () => {
  const { selectedVehicle, selectVehicle } = useContext(AppContext);
  return (
    <SelectedVehicleContainer>
      <h2>{THANKS_SELECT_VEHICLE}</h2>
      <h3>
        {VEHICLE_MAKE}
        {selectedVehicle?.make}
      </h3>
      <h3>
        {VEHICLE_MODEL} {selectedVehicle?.model}
      </h3>
      <h3>
        {VEHICLE_BODY_TYPE}
        {selectedVehicle?.bodyType}
      </h3>
      <h3>
        {VEHICLE_FUEL_TYPE} {selectedVehicle?.fuelType}
      </h3>
      <span>
        {ENGINE_POWER_PS}
        {selectedVehicle?.engineCapacity} &#128293;
      </span>
      <span>
        {ENGINE_POWER_KW} {selectedVehicle?.engineCapacity} &#9889;
      </span>
      <SelectedVehicleButtonsContainer>
        <GreenButton
          onClick={() => {
            selectVehicle(null);
          }}
        >
          {GO_BACK_VEHICLES}
        </GreenButton>
        <GreenButton
          onClick={() => {
            window.location.reload();
          }}
        >
          {BUY_VEHICLE}
        </GreenButton>
      </SelectedVehicleButtonsContainer>
    </SelectedVehicleContainer>
  );
};

export default SelectedVehicle;
