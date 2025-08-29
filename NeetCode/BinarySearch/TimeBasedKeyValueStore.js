export class TimeMap {
	constructor() {
		this.keyStore = new Map()
	}

	/**
	 * @param {string} key
	 * @param {string} value
	 * @param {number} timestamp
	 * @returns {void}
	 * */
	set(key, value, timestamp) {
		if (!this.keyStore.has(key)) {
			this.keyStore.set(key, [])
		}
		let list = this.keyStore.get(key)
		list.push([value, timestamp])

	}

	/**
	 * @param {string} key
	 * @param {string} value
	 * @param {number} timestamp
	 * @returns {void}
	 * */
	get(key, timestamp) {
		let list = this.keyStore.get(key) ?? []
		let res = ""

		let l = 0;
		let r = list.length - 1

		while (l <= r) {
			let m = Math.floor((l + r) / 2)

			if (list[m][1] <= timestamp) {
				res = list[m][0]
				l = m + 1
			} else {
				r = m - 1
			}
		}
		return res
	}
}
