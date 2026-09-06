//Необходимо реализовать метод groupBy, который расширяет стандартные методы массивов.
//Этот метод должен возвращать структурированную версию массива в виде объекта.
//В этом объекте каждый ключ является результатом выполнения переданной функции fn(arr[i]),
//а каждое значение — массивом, содержащим все элементы исходного массива с этим ключом.

Object.defineProperty(Array.prototype, "groupBy", {
  value: function (fn) {
    return this.reduce((result, item) => {
      const key = fn(item);

      if (!Object.hasOwn(result, key)) {
        result[key] = [];
      }

      result[key].push(item);

      return result;
    }, {});
  },
  enumerable: false,
});

// Пример 1
const array1 = [{ id: 1 }, { id: 1 }, { id: 2 }];

const fn = (item) => item.id;

console.log(array1.groupBy(fn));
// {
//   1: [{ id: 1 }, { id: 1 }],
//   2: [{ id: 2 }]
// }

// Пример 2
const array2 = [1, 2, 3];
console.log(array2.groupBy(String));
// {
//   '1': [1],
//   '2': [2],
//   '3': [3]
// }
