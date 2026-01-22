// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

import { alphabeticSort } from "../../objects/isAnagram/isAnagram";

export const groupAnagrams = (arr: string[]) => {
  const map = new Map<string, string[]>();

  arr.forEach((str) => {
    const sortedStr = alphabeticSort(str);
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr)!.push(str);
  });

  return Array.from(map.values());
};
