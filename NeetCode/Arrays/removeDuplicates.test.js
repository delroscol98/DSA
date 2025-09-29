import { describe, expect, it } from "vitest";
import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates", () => {
  it("returns the number of unique elements in sorted array", () => {
    expect(removeDuplicates([1, 1, 2, 3, 4])).toBe(4);
    expect(removeDuplicates([2, 10, 10, 30, 30, 30])).toBe(3);
  });
});
