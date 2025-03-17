import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseContextExample from "./lec0302/file3";
import EmiCalculator from "./lec0502/file3";
import RdeucerExmp from "./lec2402/reducerexmp";
import ReducerDependency from "./lec1003/reducerexmp2";
import MyFeature from "./lec1103/monolithiccomp";
import MonolithicComp from "./lec1103ceB/monolithicClass";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MonolithicComp />
  </StrictMode>
);
