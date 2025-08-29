import { describe, it, expect } from "vitest";
import { TimeMap } from "./TimeBasedKeyValueStore";

describe("TimeBasedKeyValueStore", () => {
	const store = new TimeMap()

	it("creates an instance TimeMap class", () => {
		expect(store).toBeInstanceOf(TimeMap)
	})

	it("given a NEW key, value, and timestamp: it creates a new array and adds a tuple containing the value and timestamp to the newly created array", () => {
		expect(store.set("alice", "happy", 1)).toBeUndefined()

		expect(store.keyStore.get("alice")).toHaveLength(1)

		let element = store.keyStore.get("alice")[0]

		expect(element).toStrictEqual(["happy", 1])

	})

})
