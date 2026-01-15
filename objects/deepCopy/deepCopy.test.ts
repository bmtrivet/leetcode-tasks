import { deepCopy } from "./deepCopy";

describe("deepCopy", () => {
  it("copies primitives", () => {
    expect(deepCopy(42)).toBe(42);
    expect(deepCopy("hello")).toBe("hello");
    expect(deepCopy(null)).toBeNull();
    expect(deepCopy(undefined)).toBeUndefined();
    expect(deepCopy(true)).toBe(true);
  });

  it("copies functions by reference", () => {
    const fn = () => 123;
    expect(deepCopy(fn)).toBe(fn);
  });

  it("copies Date objects", () => {
    const date = new Date();
    const copy = deepCopy(date);
    expect(copy).not.toBe(date);
    expect(copy.getTime()).toBe(date.getTime());
  });

  it("copies arrays", () => {
    const arr = [1, { a: 2 }, [3, 4]];
    const copy = deepCopy(arr);
    expect(copy).not.toBe(arr);
    expect(copy).toEqual(arr);
    expect(copy[1]).not.toBe(arr[1]);
    expect(copy[2]).not.toBe(arr[2]);
  });

  it("copies plain objects", () => {
    const obj = { a: 1, b: { c: 2 } };
    const copy = deepCopy(obj);
    expect(copy).not.toBe(obj);
    expect(copy).toEqual(obj);
    expect(copy.b).not.toBe(obj.b);
  });

  it("copies Map", () => {
    const map = new Map();
    map.set("a", { b: 2 });
    const copy = deepCopy(map);
    expect(copy).not.toBe(map);
    expect(copy.get("a")).toEqual({ b: 2 });
    expect(copy.get("a")).not.toBe(map.get("a"));
  });

  it("copies Set", () => {
    const set = new Set([1, { a: 2 }]);
    const copy = deepCopy(set);
    expect(copy).not.toBe(set);
    expect(Array.from(copy)).toEqual(Array.from(set));
    const originalObj = Array.from(set)[1];
    const copiedObj = Array.from(copy)[1];
    expect(copiedObj).toEqual(originalObj);
    expect(copiedObj).not.toBe(originalObj);
  });

  it("copies nested structures", () => {
    const obj = {
      arr: [1, { a: 2 }],
      map: new Map([["x", { y: 3 }]]),
      set: new Set([{ z: 4 }]),
      date: new Date(),
    };
    const copy = deepCopy(obj);
    expect(copy).not.toBe(obj);
    expect(copy.arr).not.toBe(obj.arr);
    expect(copy.map).not.toBe(obj.map);
    expect(copy.set).not.toBe(obj.set);
    expect(copy.date).not.toBe(obj.date);
    expect(copy).toEqual(obj);
  });

  it("copies objects with symbol keys", () => {
    const sym = Symbol("key");
    const obj = { [sym]: 123, a: 1 };
    const copy = deepCopy(obj);
    expect(copy).not.toBe(obj);
    expect(copy[sym]).toBe(123);
    expect(copy.a).toBe(1);
  });
});
