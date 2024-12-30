import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import StateABC from "./lec3012/statemgmt1";
// import StateXYZ from "./lec3012/statemgmt2";
import StateMerge from "./lec3012/statemgmt3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateMerge />
  </StrictMode>
);
