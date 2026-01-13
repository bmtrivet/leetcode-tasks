// Given a sorted array of numbers in ascending order, you need to "remove" duplicates so that each element appears only once and return the new length of the array after removing duplicates.
// The function must work in-place, meaning you cannot use an additional array to store the result.
// You are allowed to modify the array only within the allocated memory.

// const numbers = [1, 1, 2];
// const length = removeDuplicates(numbers) => [1, 2, ...], а length === 2

export const removeDuplicates = (arr: Array<number>) => {
  if (!arr.length) {
    return 0;
  }

  let writeIndex = 0;

  for (let readIndex = 1; readIndex < arr.length; readIndex++) {
    if (arr[writeIndex] !== arr[readIndex]) {
      writeIndex++;
      arr[writeIndex] = arr[readIndex];
    }
  }

  return writeIndex + 1;
};
