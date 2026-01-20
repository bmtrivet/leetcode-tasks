export {};

declare global {
  interface Function {
    myBind: (context: any, ...boundArgs: any[]) => (...args: any[]) => any;
    myApply: (context: any, boundArgs: any[]) => void;
  }
}

Function.prototype.myBind = function (context, ...boundArgs) {
  const originalFn = this;

  return function (...args) {
    const fnKey = Symbol("fn");
    context[fnKey] = originalFn;

    const result = context[fnKey](...boundArgs, ...args);
    delete context[fnKey];

    return result;
  };
};

Function.prototype.myApply = function (context, boundArgs) {
  const originalFn = this;

  const fnKey = Symbol("fn");
  context[fnKey] = originalFn;

  context[fnKey](...boundArgs);
  delete context[fnKey];
};

function testFunc(
  this: { name: string },
  greeting: string,
  punctuation: string
) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person2 = { name: "Alice" };

//testFunc.myBind(person2, "Hello", "!")();
testFunc.myApply(person2, ["Hi", "!!!"]);
