import { useEffect, useReducer } from "react";
const initialState = {
  options: [
    {
      id: 1,
      name: "car",
      value: 40,
    },
    {
      id: 2,
      name: "bike",
      value: 60,
    },
    {
      id: 3,
      name: "plane",
      value: 80,
    },
  ],
  selected: 1,
  quantity: 1,
};
function ReduceButtonState(state) {
  return {
    ...state,
    incrementDisabled: state.quantity === 10,
    decrementDisabled: state.quantity === 0,
  };
}
function ReduceTotal(state) {
  const option = state.options.find((i) => i.id === state.selected);
  return {
    ...state,
    total: state.quantity * option.value,
  };
}
function ReducerFunctio2(state, action) {
  let newState;
  switch (action.type) {
    case "init":
      newState = ReduceButtonState(state);
      return ReduceTotal(newState);
    case "incrementQuantity":
      newState = { ...state, quantity: state.quantity + 1 };
      newState = ReduceButtonState(newState);
      return ReduceTotal(newState);
    case "decrementQuantity":
      newState = { ...state, quantity: state.quantity - 1 };
      newState = ReduceButtonState(newState);
      return ReduceTotal(newState);
    case "selectItem":
      newState = { ...state, selected: Number(action.id) };
      return ReduceTotal(newState);
    default:
      throw new Error("Unknow action type " + action.type);
  }
}
export default function ReducerDependency() {
  const [
    {
      options,
      selected,
      quantity,
      incrementDisabled,
      decrementDisabled,
      total,
    },
    dispatch,
  ] = useReducer(ReducerFunctio2, initialState);

  useEffect(() => {
    dispatch({ type: "init" });
  });

  return (
    <>
      <section>
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: "incrementQuantity" })}
        >
          +
        </button>
        <input readOnly value={quantity} />
        <button
          disabled={decrementDisabled}
          onClick={() => dispatch({ type: "decrementQuantity" })}
        >
          -
        </button>
      </section>
      <section>
        <select
          value={selected}
          onChange={(e) => dispatch({ type: "selectItem", id: e.target.value })}
        >
          {options.map((i) => (
            <option key={i.id} value={i.id}>
              {" "}
              {i.name} {i.value}
            </option>
          ))}
        </select>
        <br />
        Total Price: $ {total}
      </section>
    </>
  );
}
