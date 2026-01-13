import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("finds a pair that sums to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("returns null if no pair exists", () => {
    expect(twoSum([1, 2, 3], 10)).toBeNull();
  });

  it("works with identical numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("returns the first found pair", () => {
    expect(twoSum([1, 2, 3, 4, 4], 8)).toEqual([3, 4]);
  });

  it("works with negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it("returns null for an empty array", () => {
    expect(twoSum([], 5)).toBeNull();
  });
});
