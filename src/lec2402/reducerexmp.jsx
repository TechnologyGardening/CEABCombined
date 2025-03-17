import { useReducer } from "react";
function Funct1(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };
    case "changeAge":
      return { ...state, age: action.value };
    default:
      return state;
  }
}
function RdeucerExmp() {
  const [{ name, age }, dispatch] = useReducer(Funct1, {
    name: "abc",
    age: 45,
  });
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) =>
          dispatch({ type: "changeName", value: e.target.value })
        }
      />
      <br />
      Name is {name}
      <br />
      <input
        type="text"
        value={age}
        onChange={(e) => dispatch({ type: "changeAge", value: e.target.value })}
      />
      <br />
      Age is {age}
    </>
  );
}
export default RdeucerExmp;
