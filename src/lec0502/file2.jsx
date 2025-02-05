import * as React from "react";
import { EmiContext } from "./file1";

export function Page1() {
  const { prin, setPrin } = React.useContext(EmiContext);
  return (
    <>
      <br />
      <br />
      <label>Enter Principle Amount: </label>
      <br />
      <input
        type="number"
        value={prin}
        onChange={(e) => setPrin(Number(e.target.value))}
      />
    </>
  );
}

export function Page2() {
  const { rate, setRate } = React.useContext(EmiContext);
  return (
    <>
      <br />
      <br />
      <label>Enter Rate of Interest: </label>
      <br />
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
      />
    </>
  );
}

export function Page3() {
  const { dur, setDur } = React.useContext(EmiContext);
  return (
    <>
      <br />
      <br />
      <label>Enter Duration: </label>
      <br />
      <input
        type="number"
        value={dur}
        onChange={(e) => setDur(Number(e.target.value))}
      />
    </>
  );
}

export function Page4() {
  const { prin, rate, dur, total, setTotal } = React.useContext(EmiContext);
  return (
    <>
      <br />
      <br />
      <button
        onClick={() => {
          let v1 = (prin * rate * dur) / 100;
          setTotal(v1);
        }}
      >
        {" "}
        Calculate{" "}
      </button>
      <label>Total Amount is : {total}</label>
    </>
  );
}
