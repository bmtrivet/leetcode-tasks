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
