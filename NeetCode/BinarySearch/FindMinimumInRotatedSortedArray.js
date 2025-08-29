/**
 * You are given an array of length "a" which was originally sorted in ascending order. It has now been rotated between 1 and "n" times. For example, the array "nums = [1,2,3,4,5,6]" might become:
 * * "[3,4,5,6,1,2,3]" if it was rotated 4 times:
 * * "[1,2,3,4,5,6]" if it was rotated 6 times.
 *
 * Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 imes produces the original array.
 *
 * Assuming all elements in the rotated sorted array "nums" are unique, return the minimum element of this array.
 *
 * A solution that runs in "O(n)" time is trivial, can you write an algorithm that runs in "O(log(n))" time?
 *
 * @param {number[]} nums
 * @returns {number}
 * */
export function findMin(nums) {
	let l = 0
	let r = nums.length - 1
	let res = Infinity

	while (l <= r) {
		if (nums[l] <= nums[r]) {
			res = Math.min(res, nums[l])
		}

		let m = Math.floor((l + r) / 2)
		res = Math.min(res, nums[m])

		if (nums[m] >= nums[l]) {
			l = m + 1
		} else {
			r = m - 1
		}
	}
	return res
}
