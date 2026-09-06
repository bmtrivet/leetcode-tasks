/*
Дан массив чисел. Необходимо отсортировать нечетные числа по возрастанию, оставив четные
числа на своих местах.
*/

function oddSort(numbers: number[]) {
  const oddValues = [];
  const oddIndexses = [];

  const result = [...numbers];

  for (let i = 0; i < result.length; i++) {
    if (result[i] % 2 !== 0) {
      oddValues.push(result[i]);
      oddIndexses.push(i);
    }
  }

  oddValues.sort((a, b) => a - b);

  for (let i = 0; i < oddIndexses.length; i++) {
    result[oddIndexses[i]] = oddValues[i];
  }

  return result;
}

console.log(oddSort([2, 3, 7, 4, 6, 1, 5, 8, 9])); // [2, 1, 3, 4, 6, 5, 7, 8, 9]
console.log(oddSort([2, 4, 6, 8])); // [2, 4, 6, 8]
console.log(oddSort([3, 7, 1, 5, 9])); // [1, 3, 5, 7, 9]
