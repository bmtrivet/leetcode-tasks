/*
У нас есть набор билетов вида:

[
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' },
    ...
]

Из этих билетов можно построить единственный, неразрывный маршрут. 
Петель и повторов в маршруте нет.

Нужно написать программу, которая возвращает эти же объекты билетов
в порядке следования по маршруту. Начало маршрута известно
*/

function getRoute(
  tickets: Array<{ from: string; to: string }> = [],
  start: string,
) {
  const map = new Map();

  for (const ticket of tickets) {
    map.set(ticket.from, ticket);
  }

  let current = start;
  const result = [];

  while (map.has(current)) {
    const ticket = map.get(current);

    result.push(ticket);
    current = ticket.to;
  }

  return result;
}

const routes = [
  { from: "London", to: "Moscow" },
  { from: "NY", to: "London" },
  { from: "Moscow", to: "SPb" },
];

console.log(getRoute(routes, "NY"));
