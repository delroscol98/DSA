import { describe, expect, it } from "vitest";
import { findMin } from "./FindMinimumInRotatedSortedArray";

describe("FindMinimuminRotatedSortedArray", () => {
	it("returns the smallest number in the array", () => {
		expect(findMin([3, 4, 5, 6, 1, 2])).toBe(1)

		expect(findMin([4, 5, 0, 1, 2, 3])).toBe(0)
	})
})
