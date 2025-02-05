import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseContextExample from "./lec0302/file3";
import EmiCalculator from "./lec0502/file3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmiCalculator />
  </StrictMode>
);
