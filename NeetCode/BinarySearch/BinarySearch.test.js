import { describe, expect, it } from "vitest";
import { BinarySearch } from "./BinarySearch";

describe("binarySearch", () => {
  it("returns the index of the target in the array", () => {
    expect(BinarySearch([-1, 0, 2, 4, 6, 8], 4)).toBe(3);
  });

  it("returns -1 when the target does not exist in the array", () => {
    expect(BinarySearch([-1, 0, 2, 4, 6, 8], 3)).toBe(-1);
  });
});
