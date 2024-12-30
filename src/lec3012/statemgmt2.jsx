import * as React from "react";
class StateXYZ extends React.Component {
  state = {
    first: false,
    second: 3.14,
    third: "hello",
    fourth: "red",
    fifth: "green",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        first: true,
        second: 4.28,
        third: "world",
        fourth: "blue",
        fifth: "purple",
      });
    }, 3000);
  }
  render() {
    const { first, second, third, fourth, fifth } = this.state;
    return (
      <div>
        <button disabled={first}>My Button </button>
        <p style={{ color: fourth }}>
          Value of Float variable is <strong>{second}</strong>
        </p>
        <p style={{ color: fifth }}>
          Value of String variable is<strong> {third}</strong>
        </p>
      </div>
    );
  }
}
export default StateXYZ;

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// // import StateABC from "./lec3012/statemgmt1";
// import StateXYZ from "./lec3012/statemgmt2";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <StateXYZ />
//   </StrictMode>
// );
