import { isAnagram } from "./isAnagram";

describe("isAnagram", () => {
  it("returns true for simple anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("returns false for non-anagrams", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  it("returns true for empty strings", () => {
    expect(isAnagram("", "")).toBe(true);
  });

  it("returns false if lengths are different", () => {
    expect(isAnagram("a", "aa")).toBe(false);
  });

  it("returns true for anagrams with repeated letters", () => {
    expect(isAnagram("aabbcc", "baccab")).toBe(true);
  });

  it("returns false for strings with same letters but different counts", () => {
    expect(isAnagram("aabbc", "abbcc")).toBe(false);
  });

  it("returns true for single-letter anagrams", () => {
    expect(isAnagram("x", "x")).toBe(true);
  });

  it("returns false for single-letter non-anagrams", () => {
    expect(isAnagram("x", "y")).toBe(false);
  });
});
