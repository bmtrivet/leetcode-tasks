/**
 * Написать декоратор для функции, который ограничивает число вызовов.
 *
 * callLimit(fn, limit, callback), принимает следующие аргументы:
 * fn - функция, которую декорируем;
 * limit - максимальное число вызовов;
 * callback - вызывается, когда совершен последний вызов. Опционально.
 * У вызываемой функции должен быть метод для перезагрузки счётчика в начальное положение.
 */

function callLimit(fn, limit, callback) {
  let attempts = limit;

  const func = (...args) => {
    if (attempts === 0) return;

    attempts--;
    fn(...args);

    if (typeof callback === "function" && attempts === 0) {
      callback();
    }
  };

  func.reset = () => {
    attempts = limit;
  };

  return func;
}

function log(title, message) {
  console.log(title + ": " + message);
}

// Пример использования 1
var logLimited = callLimit(log, 3, () => console.log("end"));
logLimited("title", "desc"); // Console output: title: desc
logLimited("title2", "desc"); // Console output: title2: desc
logLimited("title3", "desc"); // Console output: title3: desc
logLimited("title4", "desc"); // Ничего не выведется

logLimited.reset(); // Сброс счетчика
logLimited("title5", "desc"); // Console output: title5: desc
logLimited("title6", "desc"); // Console output: title6: desc
logLimited("title7", "desc"); // Console output: title7: desc
logLimited("title8", "desc"); //  Ничего не выведется
