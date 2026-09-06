// Реализовать функцию compose, которая принимает
// переменное количество функций и возвращает новую функцию.
// Результат работы каждой функции передается в следующую.

// Code here

const compose = (...funcs) => {
  return (...args) => {
    return funcs.reduceRight((res, fn, index) => {
      if (index === funcs.length - 1) {
        return fn(...args);
      }

      return fn(res);
    }, null);
  };
};

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

console.clear();
console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));
