// Необходимо проверить решение задачи по двум сервисам, вызвав функцию
// checkResult(url1, solution), checkResult(url2, solution).
// Функция checkResult принимает URL сервиса и решение задачи, возвращая Promise<boolean>.
// checkResult: (url: string, solution: string | number) => Promise<boolean>;
// Если оба запроса вернули true – вывести success.
// Если хотя бы один запрос вернул false – вывести fail.
// Если хотя бы один запрос не ответил – вывести error.
// Если хотя бы один запрос отвечает дольше 1 секунды – вывести timeout.

const checkResult = async (url, solution) => {
  await new Promise((res, rej) => setTimeout(res, 900));

  if (url === "yandex.ru") {
    return true;
  }

  return true;
};

const solution = "Any answer";
const url1 = "yandex.ru";
const url2 = "google.com";

async function checkResults() {
  let timerId = undefined;

  const timeout = new Promise((_, reject) => {
    timerId = setTimeout(() => reject(new Error("timeout")), 1000);
  });

  try {
    const promises = [checkResult(url1, solution), checkResult(url2, solution)];

    const results = await Promise.race([Promise.all(promises), timeout]);

    if (results.every((result) => result === true)) {
      console.log("success");
    } else {
      console.log("fail");
    }
  } catch (e) {
    if (e.message === "timeout") {
      console.log("timeout");
    } else {
      console.log("error");
    }
  }
}

checkResults();
