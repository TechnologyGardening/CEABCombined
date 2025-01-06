import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StateExample3 from "./lec0601/hookexample3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateExample3 />
  </StrictMode>
);
