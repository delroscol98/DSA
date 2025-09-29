import { describe, expect, it } from "vitest";
import { removeElement } from "./removeElement";

describe("removeElement", () => {
  it("returns the number of elements in an array that are not equal to the value argument", () => {
    expect(removeElement([1, 1, 2, 3, 4], 1)).toBe(3);
    expect(removeElement([2, 10, 10, 30, 30, 30], 2)).toBe(5);
  });
});
