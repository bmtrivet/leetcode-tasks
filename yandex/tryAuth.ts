// Дана asyncAuth(callback) с error-first callback.
// Оберните её в промис — auth().
// Затем напишите tryAuth(n): при ошибке до n дополнительных попыток, если все провалились — вернуть последнюю ошибку.

const asyncAuth = (error, data) => {};

const auth = () => {
  return new Promise((res, rej) => {
    asyncAuth((error, data) => {
      if (error) rej(error);
      else res(data);
    });
  });
};

const tryAuth = (n) => {
  return auth().catch((e) => {
    if (n > 0) return tryAuth(n - 1);
    throw e;
  });
};
