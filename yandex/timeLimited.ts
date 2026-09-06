/**
 * Дана асинхронная функция fn и время t в миллисекундах, нужно вернуть новую версию этой функции,
 * выполнение которой ограничено заданным временем. Функция fn принимает аргументы,
 * переданные в эту новую функцию.
 *
 * Возвращаемая функция работает по следующим правилам:
 * - если fn выполнится за заданное время t, то функция резолвит полученные данные
 * - если fn не выполнится за заданное время t, то функция реджектит строку "Time Limit Exceeded"
 */

const timeLimited = function (fn, t) {
  return function (...args) {
    let timerId = undefined;

    const timer = new Promise((_, reject) => {
      timerId = setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    return Promise.race([fn(...args), timer]).finally(() =>
      clearTimeout(timerId),
    );
  };
};

const timeLimited = function (fn, t) {
  return async function (...args) {
    let timerId = undefined;

    const timer = new Promise((_, reject) => {
      timerId = setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    try {
      return await Promise.race([fn(...args), timer]);
    } finally {
      clearTimeout(timerId);
    }
  };
};
