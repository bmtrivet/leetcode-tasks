import { isAnagram } from "../../objects/isAnagram/isAnagram";

export const findAnagrams = (mainStr: string, findStr: string) => {
  const findStrLength = findStr.length;

  const mainStrSplitted = mainStr.split("");
  const arrOfSubstring = [];

  for (let index = 0; index < mainStrSplitted.length; index++) {
    if (index + findStrLength <= mainStrSplitted.length) {
      arrOfSubstring.push(
        mainStrSplitted.slice(index, index + findStrLength).join(""),
      );
    }
  }

  return arrOfSubstring.reduce((acc: Array<number>, item, index) => {
    if (isAnagram(item, findStr)) {
      return [...acc, index];
    }

    return acc;
  }, []);
};

const s1 = "cbaebabacd";
const s2 = "abc";
console.log(findAnagrams(s1, s2));
