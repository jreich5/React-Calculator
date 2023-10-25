import { test, expect, describe } from "bun:test";

describe("first test", () => {
  test("hello", () => {
    expect(2 + 2).toEqual(4);
  });
});
