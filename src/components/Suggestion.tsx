import React from "react";
import { MakeRowItem, Highlighted } from "./VehiloveStyledComponents";
import { ISuggestion } from "../interfaces/Suggestion";

const Suggestion = ({ onClick, value, filterValue, type }: ISuggestion) => {
  const valueIndex = value.toLowerCase().indexOf(filterValue.toLowerCase());
  const filterValueLength = filterValue.length;
  const front = value.substring(0, valueIndex).toUpperCase();
  const rest = value.substring(valueIndex + filterValueLength).toUpperCase();
  const highlighted =
    valueIndex === 0 ? (
      <Highlighted>{`${
        filterValue[0] ? filterValue[0].toUpperCase() : ""
      }${filterValue.substring(1)}`}</Highlighted>
    ) : (
      <Highlighted>{filterValue.toUpperCase()}</Highlighted>
    );

  return (
    <MakeRowItem
      onMouseDown={() => {
        onClick(value, type);
      }}
    >
      {front}
      {highlighted}
      {rest}
    </MakeRowItem>
  );
};

export default Suggestion;
