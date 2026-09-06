/**
 * Реализовать функцию sumPromises, которая принимает
 * в качестве аргументов промисы и возвращает сумму
 * результатов их выполнения.
 *
 * Функция может принимать любое количество аргументов.
 * Можно использовать любые API процессы.
 */

// Code here

// Пример использования:
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

// const sumPromises = (...promises: Array<Promise<number>>): Promise<number> => {
//   return Promise.all(promises).then((result) => {
//     return result.reduce((acc, item) => {
//       return acc + item;
//     }, 0);
//   });
// };

const sumPromises = async (
  ...promises: Array<Promise<number>>
): Promise<number> => {
  const result = await Promise.all(promises);

  return result.reduce((res, item) => res + item, 0);
};

sumPromises(promise1, promise2).then(console.log); // 3
