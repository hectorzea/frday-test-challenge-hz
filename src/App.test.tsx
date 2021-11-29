import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import AppContext from "./context/AppContext";
import userEvent from "@testing-library/user-event";

const DEFAULT_PROVIDER_OBJECT = {
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

describe("Renders Vehilove APP", () => {
  it("shows vehilove app", () => {
    render(<App />);
    const vehiloveElement = screen.getByText(/Vehilove APP/i);
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("SHOWS SERVER SHUTTED DOWN", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            error: {
              errorType: "makes",
              message: "SERVER DOWN, START API SERVER PLEASE =3",
            },
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(
      /SERVER DOWN, START API SERVER PLEASE =3/i
    );
    expect(vehiloveElement).toBeInTheDocument();
  });
});
describe("Makes Component Flow", () => {
  it("shows make label / input", () => {
    render(
      <AppContext.Provider
        value={{ ...DEFAULT_PROVIDER_OBJECT, ...{ makes: ["FORD"] } }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(
      /Start typing the brand you love... like Ford, Lexus, Nissan/i
    );
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("fails shows make label / input", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            error: {
              errorType: "makes",
              message: "An error ocurred when tried to retrieve makes",
            },
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(
      /An error ocurred when tried to retrieve makes/i
    );
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("check make input has value", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            make: "FORD",
            makes: ["FORD"],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );

    const vehiloveInput = screen.getByTestId("make-input");
    userEvent.type(vehiloveInput, "FORD");
    expect(vehiloveInput).toHaveValue("FORD");
  });
  it("check when we type the input the make options shows", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );

    const vehiloveInput = screen.getByTestId("make-input");
    userEvent.type(vehiloveInput, "FORD");
    // as we type ford the only ul will be ford
    expect(vehiloveInput).toHaveValue("FORD");

    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(1);
  });
  it("check when we dont have makes show alert for no makes records", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            make: "FORD",
            makes: [],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(/There is no makes/i);
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("select an item from list", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            selectedMake: "FORD",
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
            models: ["FIESTA"],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );

    const vehiloveInput = screen.getByTestId("make-input");
    userEvent.type(vehiloveInput, "FORD");
    // as we type ford the only ul will be ford
    expect(vehiloveInput).toHaveValue("FORD");

    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(1);
    userEvent.click(list[0]);
  });
});
describe("Models Component", () => {
  it("Check Model Component is Rendered", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            selectedMake: "FORD",
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
            models: ["FIESTA"],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(/Have you thought/i);
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("Check Model Component is Not Rendered When Backend Error Happens", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            error: {
              errorType: "models",
              message: "An error ocurred when tried to retrieve models",
            },
            selectedMake: "FORD",
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(
      /An error ocurred when tried to retrieve models/i
    );
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("Check Model Component is Rendered and if we dont have models for the previously selected make show alert", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            selectedMake: "NISSAN",
            make: "NISSAN",
            makes: ["FORD", "NISSAN", "FERRARI"],
            models: [],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(
      /There is no models for this make, try another one/i
    );
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("Check Model Component is Rendered and if we click the input all the models show", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            selectedMake: "FORD",
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
            models: ["FIESTA", "FIESTA POWER", "FUSION"],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveInput = screen.getByTestId("model-input");
    userEvent.click(vehiloveInput);

    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(3);
  });
});
describe("Vehicles Component", () => {
  it("Shows vehicles component", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            model: "FIESTA",
            selectedModel: "FIESTA",
            selectedMake: "FORD",
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
            models: ["FIESTA", "FIESTA POWER", "FUSION"],
            vehicles: [
              {
                make: "FORD",
                model: "Fiesta",
                enginePowerPS: 60,
                enginePowerKW: 44,
                fuelType: "Benzin",
                bodyType: "Limousine",
                engineCapacity: 1299,
              },
            ],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(
      /You are almost done selecting your vehicle!/i
    );
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("Does not show the vehicles component because backend error", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            error: {
              errorType: "vehicles",
              message: "An error ocurred when tried to retrieve vehicles",
            },
            model: "FIESTA",
            selectedModel: "FIESTA",
            selectedMake: "FORD",
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
            models: ["FIESTA", "FIESTA POWER", "FUSION"],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(
      /An error ocurred when tried to retrieve vehicles/i
    );
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("Show no vehicles for the selected make and model", () => {
    render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            model: "ECONOVAN",
            selectedModel: "ECONOVAN",
            selectedMake: "FORD",
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
            models: ["ECONOVAN", "FIESTA POWER", "FUSION"],
            vehicles: [],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const vehiloveElement = screen.getByText(
      /There is no vehicles for this model and make, try another one =/i
    );
    expect(vehiloveElement).toBeInTheDocument();
  });
  it("Select a vehicle", () => {
    const { rerender } = render(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            model: "FIESTA",
            selectedModel: "FIESTA",
            selectedVehicle: null,
            selectedMake: "FORD",
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
            models: ["FIESTA", "FIESTA POWER", "FUSION"],
            vehicles: [
              {
                make: "FORD",
                model: "Fiesta",
                enginePowerPS: 60,
                enginePowerKW: 44,
                fuelType: "Benzin",
                bodyType: "Limousine",
                engineCapacity: 1299,
              },
            ],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );
    const selectCarElement = screen.getByTestId("button-select-car");
    expect(selectCarElement).toBeInTheDocument();
    userEvent.click(selectCarElement);
    rerender(
      <AppContext.Provider
        value={{
          ...DEFAULT_PROVIDER_OBJECT,
          ...{
            model: "FIESTA",
            selectedModel: "FIESTA",
            selectedVehicle: {
              make: "FORD",
              model: "Fiesta",
              enginePowerPS: 60,
              enginePowerKW: 44,
              fuelType: "Benzin",
              bodyType: "Limousine",
              engineCapacity: 1299,
            },
            selectedMake: "FORD",
            make: "FORD",
            makes: ["FORD", "NISSAN", "FERRARI"],
            models: ["FIESTA", "FIESTA POWER", "FUSION"],
            vehicles: [
              {
                make: "FORD",
                model: "Fiesta",
                enginePowerPS: 60,
                enginePowerKW: 44,
                fuelType: "Benzin",
                bodyType: "Limousine",
                engineCapacity: 1299,
              },
            ],
          },
        }}
      >
        <App />
      </AppContext.Provider>
    );

    const selectedElement = screen.getByText(
      /Thank you for selecting the following vehicle/i
    );
    expect(selectedElement).toBeInTheDocument();
  });
});
