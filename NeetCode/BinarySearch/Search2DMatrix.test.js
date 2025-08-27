import { describe, expect, it } from "vitest";
import { searchMatrix } from "./Search2DMatrix";

describe("Search2DMatrix", () => {
	it("returns true if the target is found", () => {
		expect(searchMatrix([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 10)).toBe(true)
	})

	it("returns false if the target is not found", () => {
		expect(searchMatrix([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 3)).toBe(false)
	})
})
