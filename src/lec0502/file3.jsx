import { EmiProvider } from "./file1";
import { Page1, Page2, Page3, Page4 } from "./file2";
import { useState } from "react";

function SelectPage({ i }) {
  const Page = [Page1, Page2, Page3, Page4][i];
  return <Page />;
}
export default function EmiCalculator() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <EmiProvider>
      <button onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
        Principle
      </button>
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        Interest Rate
      </button>
      <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2}>
        Duration
      </button>
      <button onClick={() => setCurrentPage(3)} disabled={currentPage === 3}>
        Total
      </button>
      <SelectPage i={currentPage} />
    </EmiProvider>
  );
}
