import { describe, it, expect } from 'vitest'
import { findMedianSortedArrays } from './MedianOfTwoSortedArrays'

describe("MedianOfTwoSortedArrays", () => {
	it("returns the median of all the elements in two sorted arrays", () => {

		expect(findMedianSortedArrays([1, 2], [3])).toBe(2)
		expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5)
	})
})

