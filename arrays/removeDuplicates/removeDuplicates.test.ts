import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates", () => {
  it("returns the length of unique elements for a sorted array with duplicates", () => {
    const arr = [1, 1, 2];
    const length = removeDuplicates(arr);
    expect(length).toBe(2);
    expect(arr.slice(0, length)).toEqual([1, 2]);
  });

  it("returns the length for an array with all unique elements", () => {
    const arr = [1, 2, 3];
    const length = removeDuplicates(arr);
    expect(length).toBe(3);
    expect(arr.slice(0, length)).toEqual([1, 2, 3]);
  });

  it("returns 1 for an array with all identical elements", () => {
    const arr = [5, 5, 5, 5];
    const length = removeDuplicates(arr);
    expect(length).toBe(1);
    expect(arr.slice(0, length)).toEqual([5]);
  });

  it("returns 0 for an empty array", () => {
    const arr: number[] = [];
    const length = removeDuplicates(arr);
    expect(length).toBe(0);
    expect(arr.slice(0, length)).toEqual([]);
  });

  it("works with negative numbers", () => {
    const arr = [-3, -3, -2, -1, -1, 0, 1, 1];
    const length = removeDuplicates(arr);
    expect(length).toBe(5);
    expect(arr.slice(0, length)).toEqual([-3, -2, -1, 0, 1]);
  });
});
