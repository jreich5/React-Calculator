import { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons.tsx";

export const digitIsZero = (digit: string): boolean => {
  return digit === "0";
};

export const hasDecimal = (value: string): boolean => value.indexOf(".") !== -1;

export const formatNumberOutput = (value: string): string => {
  if (hasDecimal(value) && value.endsWith("0")) {
    return value;
  }
  if (value.length > 1 && value.startsWith("0")) {
    return String(Number(value));
  }
  return String(Number(value));
};

function Calculator() {
  const [displayNumber, setDisplayNumber] = useState("0");
  const [operand1, setOperand1] = useState("0");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("0");
  const [dataBeingDisplayed, setDataBeingDisplayed] = useState("o1");

  const clear = () => {
    setOperand1("0");
    setOperator("");
    setOperand2("0");
    setDataBeingDisplayed("o1");
    setDisplayNumber("0");
  };

  const changeSign = () => {
    let value;
    if (dataBeingDisplayed === "o1") {
      value = String(-1 * Number(operand1));
      setOperand1(value);
    } else {
      value = String(-1 * Number(operand2));
      setOperand2(value);
    }
    setDisplayNumber(value);
  };

  const containsDecimal = (value: string) => {
    return value.indexOf(".") !== -1;
  };

  const addDecimal = () => {
    if (!containsDecimal(displayNumber)) {
      if (dataBeingDisplayed === "o1") {
        const withDecimal = String(operand1) + ".";
        setDisplayNumber(withDecimal);
        setOperand1(withDecimal);
      } else {
        const withDecimal = String(operand2) + ".";
        setDisplayNumber(String(operand2) + ".");
        setOperand2(withDecimal);
      }
    }
  };

  const calculatePercent = () => {
    let value;
    if (dataBeingDisplayed === "o1") {
      value = String(Number(operand1) / 100);
      setOperand1(value);
    } else {
      value = String(Number(operand2) / 100);
      setOperand2(value);
    }
    setDisplayNumber(value);
  };

  const doOperation = (operator: string) => {
    if (dataBeingDisplayed === "o1") {
      setOperator(operator);
      setOperand2("0");
    }
  };

  const calculateValue = () => {
    const o1Num = Number(operand1);
    const o2Num = Number(operand2);
    const math = {
      "+": (): number => o1Num + o2Num,
      "-": (): number => o1Num - o2Num,
      "*": (): number => o1Num * o2Num,
      "/": (): number => o1Num / o2Num,
    };
    const value = math[operator]();
    setOperand1(String(value));
    setDataBeingDisplayed("o1");
    setDisplayNumber(String(value));
  };

  // if (digitIsZero && hasDecimal) {

  // allow the zero
  // } else {
  // don't allow it
  // }

  const processDigit = (number: number) => {
    if (operator === "") {
      setDataBeingDisplayed("o1");
      const newValue = formatNumberOutput(`${operand1}${number}`);
      setOperand1(newValue);
      setDisplayNumber(newValue);
    } else {
      setDataBeingDisplayed("o2");
      const newValue = formatNumberOutput(`${operand2}${number}`);
      setOperand2(newValue);
      setDisplayNumber(newValue);
    }
  };

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
      displayText: "*",
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
    <>
      {/* <h1>Operand1: {operand1}</h1>
      <h1>Operator: {operator}</h1>
      <h1>Operand2: {operand2}</h1>
      <h1>Data displayed {dataBeingDisplayed}</h1> */}
      <main>
        <Display displayText={displayNumber} />
        <Buttons buttonsData={buttonsData} />
      </main>
    </>
  );
}

export default Calculator;
