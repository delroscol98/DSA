import { describe, it, expect } from "vitest";
import { TimeMap } from "./TimeBasedKeyValueStore";

describe("TimeBasedKeyValueStore", () => {
	const store = new TimeMap()
	store.set("alice", "happy", 1)

	it("creates an instance TimeMap class", () => {
		expect(store).toBeInstanceOf(TimeMap)
	})

	it("Stores the key with the value at the given timestamp", () => {
		let element = store.keyStore.get("alice")[0]
		expect(element).toStrictEqual(["happy", 1])
	})

	it("returns the most recent value of key if set was previously called on it and the most recent timestamp for that key is less than or equal to the given timestamp. If there are no values, it returns an empty string.", () => {
		expect(store.get("alice", 1)).toBe("happy")
	})

})
