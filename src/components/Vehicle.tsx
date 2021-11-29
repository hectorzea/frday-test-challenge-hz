import React, { useContext } from "react";
import { IVehicleProps } from "../interfaces/Vehicle";
import {
  GreenButton,
  VehicleContainerBox,
  FlexAroundComponent,
  TwoButtonsContainer,
} from "./VehiloveStyledComponents";
import AppContext from "../context/AppContext";

const Vehicle = ({ vehicle }: IVehicleProps) => {
  const { selectVehicle } = useContext(AppContext);
  return (
    <VehicleContainerBox>
      <p style={{ textAlign: "center", margin: "1px" }}>
        {vehicle.make} {vehicle.model} {vehicle.bodyType}
      </p>
      <div style={{ padding: "5px" }}>
        <FlexAroundComponent>
          <span>Fuel Type: {vehicle.fuelType} ⛽</span>
          <span>Engine Capacity: {vehicle.engineCapacity} &#128230;</span>
        </FlexAroundComponent>
        <FlexAroundComponent>
          <span> Engine Power PS: {vehicle.engineCapacity} &#128293;</span>
          <span> Engine Power KW: {vehicle.engineCapacity} &#9889; </span>
        </FlexAroundComponent>
        <TwoButtonsContainer>
          <GreenButton
            className={"button"}
            data-testid="button-select-car"
            onClick={() => {
              selectVehicle(vehicle);
            }}
          >
            Select This Car
          </GreenButton>
        </TwoButtonsContainer>
      </div>
    </VehicleContainerBox>
  );
};

export default Vehicle;
