/**
 * Реализовать функцию-обертку runOnce, которая принимает
 * функцию и возвращает новую функцию. Новая функция
 * может быть вызвана только один раз, все последующие
 * вызовы возвращают undefined.
 *
 * Обернутая функция может принимать аргументы
 * и возвращать результат.
 */

function runOnce<T extends (...args: any[]) => any>(fn: T) {
  let isCalled = false;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (isCalled) return undefined;

    isCalled = true;

    return fn.apply(this, args);
  };
}

// Пример использования
const logHello = () => {
  console.log("hello!");
};

const logHelloOnce = runOnce(logHello);
console.clear();
logHelloOnce(); // 'hello!'
logHelloOnce(); // undefined
