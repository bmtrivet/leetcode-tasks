import { moveZeroes } from "./moveZeroes";

describe("moveZeroes", () => {
  it("moves zeros to the end and keeps the order of non-zero elements", () => {
    const arr = [0, 1, 0, 3, 12];
    moveZeroes(arr);
    expect(arr).toEqual([1, 3, 12, 0, 0]);
  });

  it("works when there are no zeros", () => {
    const arr = [1, 2, 3];
    moveZeroes(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  it("works when all elements are zeros", () => {
    const arr = [0, 0, 0];
    moveZeroes(arr);
    expect(arr).toEqual([0, 0, 0]);
  });

  it("works with zeros at the end", () => {
    const arr = [1, 2, 3, 0, 0];
    moveZeroes(arr);
    expect(arr).toEqual([1, 2, 3, 0, 0]);
  });

  it("works with zeros at the start", () => {
    const arr = [0, 0, 1, 2, 3];
    moveZeroes(arr);
    expect(arr).toEqual([1, 2, 3, 0, 0]);
  });

  it("works with an empty array", () => {
    const arr: number[] = [];
    moveZeroes(arr);
    expect(arr).toEqual([]);
  });

  it("works with a single zero", () => {
    const arr = [0];
    moveZeroes(arr);
    expect(arr).toEqual([0]);
  });

  it("works with a single non-zero", () => {
    const arr = [5];
    moveZeroes(arr);
    expect(arr).toEqual([5]);
  });
});
