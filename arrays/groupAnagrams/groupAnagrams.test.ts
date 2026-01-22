import { groupAnagrams } from "./groupAnagrams";

describe("groupAnagrams", () => {
  it("groups simple anagrams together", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result = groupAnagrams(input);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(["eat", "tea", "ate"]),
        expect.arrayContaining(["tan", "nat"]),
        expect.arrayContaining(["bat"]),
      ]),
    );
    expect(result.length).toBe(3);
  });

  it("returns empty array for empty input", () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  it("handles single word", () => {
    expect(groupAnagrams(["abc"])).toEqual([["abc"]]);
  });

  it("handles all words being anagrams", () => {
    const input = ["abc", "cab", "bca"];
    const result = groupAnagrams(input);
    expect(result.length).toBe(1);
    expect(result[0].sort()).toEqual(["abc", "cab", "bca"].sort());
  });

  it("handles no anagrams", () => {
    const input = ["abc", "def", "ghi"];
    const result = groupAnagrams(input);
    expect(result.length).toBe(3);
    expect(result.flat().sort()).toEqual(input.sort());
  });

  it("handles words with different lengths", () => {
    const input = ["a", "ab", "ba", "abc", "cab"];
    const result = groupAnagrams(input);
    expect(result).toEqual(
      expect.arrayContaining([
        ["a"],
        expect.arrayContaining(["ab", "ba"]),
        expect.arrayContaining(["abc", "cab"]),
      ]),
    );
  });
});
