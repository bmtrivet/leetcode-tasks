/**
 * Необходимо написать функцию strjoin,
 * которая склеивает строки через разделитель.
 */

// function strjoin(splitter, ...strings) {
//   return strings.join(splitter);
// }

function strjoin() {
  const [splitter, ...strings] = Array.from(arguments);

  return strings.join(splitter);
}

console.log(strjoin(".", "a", "b", "c")); // 'a.b.c'
console.log(strjoin("-", "d", "e", "f")); // 'd-e-f'
