import { deepEqual } from "./deepEqual";

describe("deepEqual", () => {
  it("returns true for equal primitives", () => {
    expect(deepEqual(42, 42)).toBe(true);
    expect(deepEqual("abc", "abc")).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
  });

  it("returns false for different primitives", () => {
    expect(deepEqual(42, 43)).toBe(false);
    expect(deepEqual("abc", "def")).toBe(false);
    expect(deepEqual(null, undefined)).toBe(false);
    expect(deepEqual(true, false)).toBe(false);
  });

  it("returns true for equal plain objects", () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  });

  it("returns false for objects with different keys", () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, c: 2 })).toBe(false);
  });

  it("returns false for objects with different values", () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
  });

  it("returns true for deeply equal nested objects", () => {
    expect(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true);
  });

  it("returns false for deeply unequal nested objects", () => {
    expect(deepEqual({ a: { b: 2 } }, { a: { b: 3 } })).toBe(false);
  });

  it("returns true for equal arrays", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it("returns false for arrays with different elements", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  it("returns true for deeply equal arrays of objects", () => {
    expect(deepEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }])).toBe(true);
  });

  it("returns false for arrays of objects with different values", () => {
    expect(deepEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 3 }])).toBe(false);
  });

  it("returns false for objects with different number of keys", () => {
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it("returns true for empty objects", () => {
    expect(deepEqual({}, {})).toBe(true);
  });

  it("returns true for empty arrays", () => {
    expect(deepEqual([], [])).toBe(true);
  });

  it("returns false for array vs object", () => {
    expect(deepEqual([], {})).toBe(false);
  });
});
