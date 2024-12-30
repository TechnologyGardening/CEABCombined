import * as React from "react";
class StateABC extends React.Component {
  state = {
    first: false,
    second: 3.14,
    third: "hello",
  };
  render() {
    const { first, second, third } = this.state;
    return (
      <div>
        <button disabled={first}>My Button </button>
        <p>
          Value of Float variable is <strong>{second}</strong>
        </p>
        <p>
          Value of String variable is<strong> {third}</strong>
        </p>
      </div>
    );
  }
}
export default StateABC;
