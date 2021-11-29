import styled from "styled-components";
export const GreenButton = styled.button`
  &:active {
    background-color: #a7e1a9;
  }
  &:active:after {
    background-color: #3d413d;
  }
  border-radius: 14px;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;
export const VehicleDataContainer = styled.div`
  height: 565px;
  overflow-y: scroll;
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border: solid 1px white;
`;
export const TwoButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const FlexAroundComponent = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const FlexCenterComponent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
export const VehicleContainerBox = styled.div`
  border: 2px solid white;
  margin-bottom: 10px;
  border-radius: 15px;
  margin-right: 5px;
`;
export const VehiloveInput = styled.input`
  width: 100%;
  height: 25px;
  border: solid 1px #347abb;
  border-radius: 25px;
  text-align: center;
`;
export const Container = styled.div`
  width: 100%;
  background-color: #1e7ad79a;
  display: flex;
  flex-direction: column;
  font-family: "M PLUS 2", sans-serif;
  align-items: center;
  height: 98vh;
`;

export const SelectedVehicleContainer = styled.div`
  border: solid 1px white;
  padding: 10px;
  text-align: center;
  background: white;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 15px;
`;

export const SelectedVehicleButtonsContainer = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;

export const VehicleContainer = styled.div`
  .prev,
  .next {
    background: #fff;
    border: none;
    padding: 10px;
    color: blue;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    margin: 0 10px;
    cursor: pointer;
  }
  .paginationItem.active {
    border: 1px solid #888;
    color: #888;
    pointer-events: none;
  }

  text-align: center;

  .prev.disabled,
  .next.disabled {
    pointer-events: none;
    box-shadow: none;
    color: #999;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 5px;
`;
export const InputLabelContainer = styled.div`
  width: 350px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
`;
export const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
  box-shadow: 0px 16px 20px 0px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  border-radius: 25px;
`;
export const Highlighted = styled.b`
  color: #055e7e;
  font-weight: 600;
`;
export const MakeRowItem = styled.li`
  &:hover {
    background-color: #dfeefc;
  }
  padding: 0.75rem 1rem;
  cursor: pointer;
`;
