import React from "react";
import { INoDataMessageProps } from "../interfaces/NoDataMessage";

const NoDataMessage = ({ message }: INoDataMessageProps) => {
  return <p>{message}</p>;
};

export default NoDataMessage;
