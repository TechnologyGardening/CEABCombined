import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StateABC from "./lec3012/statemgmt1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateABC />
  </StrictMode>
);
