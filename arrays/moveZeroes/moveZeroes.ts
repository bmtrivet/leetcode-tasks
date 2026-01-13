// Given an array of numbers, move all zeros to the end of the array while maintaining the relative order of the non-zero elements.
// The operation must be performed in-place without making a copy of the array.

// const nums = [0, 1, 0, 3, 12];
// moveZeroes(nums)=> [1, 3, 12, 0, 0]

//1 cycle but hard conditions
export const moveZeroes = (arr: Array<number>) => {
  let nonWriteIndex = 0;

  for (let index = 0; index < arr.length; index++) {
    if (index === 0 && arr[index]) {
      nonWriteIndex = 1;
      continue;
    }

    if (arr[index]) {
      arr[nonWriteIndex] = arr[index];

      if (index !== nonWriteIndex) {
        arr[index] = 0;
      }

      nonWriteIndex++;
    }
  }

  return arr;
};

//2 cycles
// export const moveZeroes = (arr: Array<number>) => {
//   let writeIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[writeIndex] = arr[i];
//       writeIndex++;
//     }
//   }

//   for (let i = writeIndex; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// };
