import { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons.tsx";

function Calculator() {
  const [total, setTotal] = useState(25);
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [dataBeingDisplayed, setDataBeingDisplayed] = useState("total");

  const returnOutput = () => {
    switch (dataBeingDisplayed) {
      case "total":
        return total;
      case "operand1":
        return operand1;
      case "operand2":
        return operand2;
    }
  };

  const clear = () => {
    setTotal(0);
    setOperand1(0);
    setOperand2(0);
    setDataBeingDisplayed("total");
  };

  const changeSign = () => {
    console.log("change sign");
    switch (dataBeingDisplayed) {
      case "total":
        setTotal(total * -1);
        break;
      case "operand1":
        setOperand1(operand1 * -1);
        break;
      case "operand2":
        setOperand2(operand2 * -1);
    }
  };

  const containsDecimal = (number: number) => {
    return String(number).split(".").length == 2;
  };

  const addDecimal = () => {
    console.log("adding decimal...");
    // switch (dataBeingDisplayed) {
    //   case "total":
    //     setTotal(total * -1);
    //     break;
    //   case "operand1":
    //     setOperand1(operand1 * -1);
    //     break;
    //   case "operand2":
    //     setOperand2(operand2 * -1);
    // }
  };

  const calculatePercent = () => console.log("calculatePercent");
  const doOperation = (operator: string) => {
    switch (operator) {
    }
  };
  const calculateValue = () => console.log("calculateValue");
  const processDigit = () => console.log("processDigit");

  const buttonsData = [
    {
      name: "Clear Button",
      displayText: "C",
      classes: ["bg-dark-grey"],
      listener: clear,
    },
    {
      name: "Sign Button",
      displayText: "+/-",
      classes: ["bg-dark-grey"],
      listener: changeSign,
    },
    {
      name: "Percent Button",
      displayText: "%",
      classes: ["bg-dark-grey"],
      listener: calculatePercent,
    },
    {
      name: "Divide Button",
      displayText: "/",
      classes: ["bg-orange"],
      listener: doOperation,
    },
    {
      name: "Seven Button",
      displayText: "7",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Eight Button",
      displayText: "8",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Nine Button",
      displayText: "9",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Multiply Button",
      displayText: "x",
      classes: ["bg-orange"],
      listener: doOperation,
    },
    {
      name: "Four Button",
      displayText: "4",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Five Button",
      displayText: "5",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Six Button",
      displayText: "6",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Minus Button",
      displayText: "-",
      classes: ["bg-orange"],
      listener: doOperation,
    },
    {
      name: "One Button",
      displayText: "1",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Two Button",
      displayText: "2",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Three Button",
      displayText: "3",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Plus Button",
      displayText: "+",
      classes: ["bg-orange"],
      listener: doOperation,
    },
    {
      name: "Zero Button",
      displayText: "0",
      classes: ["bg-light-grey"],
      listener: processDigit,
    },
    {
      name: "Decimal Button",
      displayText: ".",
      classes: ["bg-light-grey"],
      listener: addDecimal,
    },
    {
      name: "Equals Button",
      displayText: "=",
      classes: ["bg-orange"],
      listener: calculateValue,
    },
  ];

  return (
    <main>
      <Display displayText={String(returnOutput())} />
      <Buttons buttonsData={buttonsData} />
    </main>
  );
}

export default Calculator;
