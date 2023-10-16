import { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons.tsx";
import { buttonsData } from "./buttons-data.ts";

function Calculator() {
  const [total, setTotal] = useState(0);

  return (
    <main>
      This is the calculator...
      <Display displayText={String(total)} />
      <Buttons buttonsData={buttonsData} />
    </main>
  );
}

export default Calculator;
