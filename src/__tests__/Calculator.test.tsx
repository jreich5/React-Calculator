import { test, expect, describe } from "bun:test";
import {
  digitIsZero,
  hasDecimal,
  formatNumberOutput,
} from "../components/Calculator.tsx";

describe("digitIsZero", () => {
  test("should be defined", () => {
    expect(digitIsZero).toBeDefined();
  });
  test("should return true if passed zero", () => {
    expect(digitIsZero("0")).toEqual(true);
  });
  test("should return false if not passed zero", () => {
    expect(digitIsZero("1")).toEqual(false);
    expect(digitIsZero("7")).toEqual(false);
    expect(digitIsZero("null")).toEqual(false);
  });
});

describe("hasDecimal", () => {
  test("should be defined", () => {
    expect(hasDecimal).toBeDefined();
  });
  test("should return true when passed a string with a decimal", () => {
    expect(hasDecimal("3.01")).toEqual(true);
    expect(hasDecimal("1.5")).toEqual(true);
    expect(hasDecimal("-0.2")).toEqual(true);
    expect(hasDecimal("110.2")).toEqual(true);
  });
  test("should return false when passed a string without a decimal", () => {
    expect(hasDecimal("301")).toEqual(false);
    expect(hasDecimal("15")).toEqual(false);
    expect(hasDecimal("-2")).toEqual(false);
    expect(hasDecimal("1112")).toEqual(false);
  });
});

describe("returnZeroValue", () => {
  test("should be defined", () => {
    expect(formatNumberOutput).toBeDefined();
  });
  test("should return '0' when passed '0'", () => {
    expect(formatNumberOutput("0")).toEqual("0");
  });
  test("should return '1' when passed '01'", () => {
    expect(formatNumberOutput("01")).toEqual("1");
  });
  test("should return '1' when passed '1'", () => {
    expect(formatNumberOutput("1")).toEqual("1");
  });
  test("should return '1.5' when passed '1.5", () => {
    expect(formatNumberOutput("1.5")).toEqual("1.5");
  });
  test("should return '1.0' when passed '1.0", () => {
    expect(formatNumberOutput("1.0")).toEqual("1.0");
  });
});
