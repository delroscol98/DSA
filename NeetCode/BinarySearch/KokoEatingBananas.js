/**
 * You are given an integer array "piles" where "piles[i] is the number of bananas in the "ith" pile. You are alos given an integer "h", which represents the number of hours you have to eat all the bananas
 * You may decide your bananas-per-hour eating rate "k". Each hour, you may choose a pile of bananas and eat "k" bananas from that pile. If the pile has less than "k" bananas, you may finish eating the pile but you can not eat from another pile in the same hour.
 * Return the minimum integer "k" such that you can eat all the bananas within "h" hours
 * */

export function minEatingSpeed(piles, h) {
	let l = 1
	let r = Math.max(...piles)
	let minK = r

	while (l <= r) {
		let k = Math.floor((l + r) / 2)

		let time = 0
		for (const num of piles) {
			time += Math.ceil(num / k)
		}

		if (time <= h) {
			minK = k
			r = k - 1
		} else {
			l = k + 1
		}
	}

	return minK
}
