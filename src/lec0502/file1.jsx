/* eslint-disable react/prop-types */
import * as React from "react";
export const EmiContext = React.createContext();

export function EmiProvider({ children }) {
  const [prin, setPrin] = React.useState(10000);
  const [rate, setRate] = React.useState(7);
  const [dur, setDur] = React.useState(12);
  const [total, setTotal] = React.useState(0);
  return (
    <EmiContext.Provider
      value={{
        prin,
        setPrin,
        rate,
        setRate,
        dur,
        setDur,
        total,
        setTotal,
      }}
    >
      {children}
    </EmiContext.Provider>
  );
}
