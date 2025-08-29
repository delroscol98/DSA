/**
 * You are given an array of distinct integers "nums", sorted in ascending order, and an integer target
 * Implement a function to search for "target" within "nums". If it exists, then return its index, otherwise return -1
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 * */
export function BinarySearch(nums, target) {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		let mid = Math.floor((l + r) / 2);

		if (target < nums[mid]) {
			r = mid - 1;
		} else if (target > nums[mid]) {
			l = mid + 1;
		} else {
			return mid;
		}
	}

	return -1;
}
