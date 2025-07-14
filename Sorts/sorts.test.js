import { describe, expect, it } from "vitest";
import { createRandNumArr } from "../utils";
import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { selectionSort } from "./selectionSort";

describe("bubbleSort", () => {
  it("sorts an unordered array of numbers in ascending order", () => {
    const randNumArr = createRandNumArr(100);

    expect(bubbleSort(randNumArr)).toStrictEqual(
      [...randNumArr].sort((a, b) => a - b)
    );
  });
});

describe("insertionSort", () => {
  it("sorts an unordered array of numbers in ascending order", () => {
    const randNumArr = createRandNumArr(10);

    expect(insertionSort(randNumArr)).toStrictEqual(
      [...randNumArr].sort((a, b) => a - b)
    );
  });
});

describe("selectionSort", () => {
  it("sorts an unordered array of numbers in ascending order", () => {
    const randNumArr = createRandNumArr(100);

    expect(selectionSort(randNumArr)).toStrictEqual(
      [...randNumArr].sort((a, b) => a - b)
    );
  });
});
