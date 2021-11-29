import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import NoDataMessage from "./NoDataMessage";
import ErrorMessage from "./ErrorMessage";
import {
  VehicleContainer,
  VehicleDataContainer,
  FlexCenterComponent,
} from "./VehiloveStyledComponents";
import Vehicle from "./Vehicle";
import {
  VEHICLES,
  VEHICLES_ERROR_RETRIEVE_RECORDS,
  VEHICLES_NOT_FOUND_MODEL_MAKE,
  ALMOST_DONE_VEHICLE,
  PREVIOUS_PAGE,
  NEXT_PAGE,
} from "../constants";
const Vehicles = () => {
  const {
    selectedMake,
    selectedModel,
    loadData,
    vehicles,
    error: { errorType },
  } = useContext(AppContext);
  useEffect(() => {
    if (selectedMake && selectedModel) {
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
    }
  }, [selectedModel, selectedMake]);

  const [vehiclePages] = useState(Math.round(vehicles.length / 10));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (e: any) => {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * 10 - 10;
    const endIndex = startIndex + 10;
    return vehicles.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 10) * 10;
    return new Array(10).fill(undefined).map((_, idx) => start + idx + 1);
  };

  return errorType === "vehicles" ? (
    <ErrorMessage />
  ) : vehicles.length === 0 ? (
    <NoDataMessage message={VEHICLES_NOT_FOUND_MODEL_MAKE} />
  ) : (
    <VehicleContainer>
      <span>&#128071; {ALMOST_DONE_VEHICLE} &#128071;</span>
      <VehicleDataContainer className="dataContainer">
        {getPaginatedData().map((vehicle, idx) => (
          <Vehicle vehicle={vehicle} key={`vehicle-${idx}`} />
        ))}
      </VehicleDataContainer>

      <FlexCenterComponent className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          {PREVIOUS_PAGE}
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`next ${currentPage === vehiclePages ? "disabled" : ""}`}
        >
          {NEXT_PAGE}
        </button>
      </FlexCenterComponent>
    </VehicleContainer>
  );
};

export default Vehicles;
