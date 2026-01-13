//Given an first array of integers, return indices of the two numbers such that they add up to a specific target.
// const result = twoSum([2, 7, 11, 15], 9) => [0, 1];

export const twoSum = (arr: Array<number>, target: number) => {
  const numbers = new Map();

  return arr.reduce((acc: Array<number> | null, item, index) => {
    const findNumber = target - item;

    if (numbers.has(findNumber) && !acc) {
      const findNumberIndex = numbers.get(findNumber);

      return [findNumberIndex, index];
    }

    numbers.set(item, index);

    return acc;
  }, null);
};
