// Вам заданы строки , состоящая из латинских букв, пробелов и вывесы препинания.
// Строка называется панграммой, если она содержит каждую из 26 латинских
// букв хотя бы раз. Определите лишнего ли строка панграммой.
// Решение должно быть решено за O(n)

function isPangram(test: string) {
  const set = new Set();

  for (const char of test) {
    const key = char.toLowerCase();
    if (key >= "a" && key <= "z") {
      set.add(key);
    }

    if (set.size === 26) {
      return true;
    }
  }

  return false;
}

console.log(
  isPangram(
    "A pangram or holoslphabetic sentence is a sentence using every letter of a given alphabet at least once.",
  ),
); // -> false

console.log(
  isPangram("qwer t y uii o p asdf g hhgfd j k l z x ccc vvv bn m d g, . ."),
); // -> true
