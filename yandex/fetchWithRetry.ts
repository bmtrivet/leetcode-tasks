// Необходимо написать функцию, которая на вход принимает урл,
// - асинхронно ходит по этому урагу GET запросом и возвращает данные (json).
// - Для получения данных использовать fetch.
// - Можно использовать только Promise API.
// - Если при исполнении запроса возникала ошибка, то пробовать запросить ещё 5 раз.
// - Если в итоге информация получить не удалось, вернуть ошибку "Заданный URL недоступен".

function get(url, attempts = 5) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }

      return response.json();
    })
    .catch(() => {
      if (attempts > 0) {
        return get(url, attempts - 1);
      }

      throw new Error("Заданный URL недоступен");
    });
}

get(url)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
