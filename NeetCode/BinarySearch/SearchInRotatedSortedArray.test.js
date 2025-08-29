import { describe, expect, it } from "vitest";
import { search } from "./SearchInRotatedSortedArray";

describe("SearchInRotatedSortedArray", () => {
	it("returns the index of the target number in the given array", () => {
		expect(search([3, 4, 5, 6, 1, 2], 1)).toBe(4)

		expect(search([3, 4, 5, 6, 1, 2], 10)).toBe(-1)
	})
})
