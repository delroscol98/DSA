import { describe, it, expect } from "vitest";
import { createRandNumArr } from "./utils";

describe("createRandNumArr", () => {
  it("creates a random number array of n-length given the value of n", () => {
    expect(createRandNumArr(10)).toHaveLength(10);
  });

  it("creates an array of random numbers", () => {
    expect(createRandNumArr(10)).toEqual(
      expect.arrayContaining([expect.any(Number)])
    );
  });
});
