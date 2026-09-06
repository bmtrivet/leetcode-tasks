/**
 * Реализовать структуру данных MaxStack, в которой есть методы:
 * pop() – удаляет и возвращает последний добавленный элемент за O(1),
 *    кидает исключение или возвращает ошибку, если стек пустой
 * push(value) – добавляет элемент в стек за O(1)
 * max() – возвращает максимальное значение среди всех элементов стека за O(1),
 *    кидает исключение или возвращает ошибку, если стек пустой
 */

// code here

class MaxStack {
  private stack: number[] = [];
  private maxStack: number[] = [];

  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(value: number) {
    this.stack.push(value);

    const currentMax = this.maxStack.length
      ? this.maxStack[this.maxStack.length - 1]
      : value;

    this.maxStack.push(Math.max(value, currentMax));
  }

  pop() {
    if (!this.stack.length) {
      throw new Error("stack is empty");
    }

    this.maxStack.pop();
    return this.stack.pop();
  }

  max() {
    if (!this.maxStack.length) {
      throw new Error("stack is empty");
    }

    return this.maxStack.at(-1);
  }
}

// Пример использования
const stack = new MaxStack();
stack.push(2);
// max = 2, stack = [2]
console.log(stack.max()); // 2

stack.push(1);
// max = 2, stack = [2, 1]
console.log(stack.max()); // 2

stack.push(3);
// max = 3, stack = [2, 1, 3]
console.log(stack.max()); // 3

stack.push(3);
// max = 3, stack = [2, 1,

console.log(stack.max()); // 3
