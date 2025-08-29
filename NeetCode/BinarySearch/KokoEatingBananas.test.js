import { describe, expect, it } from "vitest";
import { minEatingSpeed } from "./KokoEatingBananas";

describe("minEatingSpeed", () => {
	it("returns the minimum integer k such that you can all the bananas within h hours", () => {
		expect(minEatingSpeed([1, 4, 3, 2], 9)).toBe(2)

		expect(minEatingSpeed([25, 10, 23, 4], 4)).toBe(25)
	})
})
