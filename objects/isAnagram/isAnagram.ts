// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// const s = "anagram";
// const t = "nagaram";
// const result = isAnagram(s, t) => true;

import { deepEqual } from "../deepEqual/deepEqual";

// const sortedStringify = (obj: Record<string, number>) => {
//   return JSON.stringify(
//     Object.keys(obj)
//       .sort()
//       .reduce((acc: Record<string, number>, key) => {
//         acc[key] = obj[key];
//         return acc;
//       }, {})
//   );
// };

// For training
// const splitStr = (str: string) => {
//   const splitStr: { [key: string]: number } = {};

//   for (let value of str) {
//     if (splitStr[value]) {
//       splitStr[value] += 1;
//     } else {
//       splitStr[value] = 1;
//     }
//   }

//   return splitStr;
// };

// export const isAnagram = (str1: string, str2: string) => {
//   const splitStr1 = splitStr(str1);
//   const splitStr2 = splitStr(str2);

//   //return sortedStringify(splitStr1) === sortedStringify(splitStr2);
//   return deepEqual(splitStr1, splitStr2);
// };

export const alphabeticSort = (str: string) => {
  return str.split("").sort().join("");
};

export const isAnagram = (str1: string, str2: string) => {
  return alphabeticSort(str1) === alphabeticSort(str2);
};
