const person = {
  name: "Nikita",
  sayHello: function () {
    console.log(`Aloha, ${this.name}`);
  },
};

const sayHelloFunc = person.sayHello;

function greet(this: { name: string }, greeting: string) {
  console.log(greeting + ", " + this.name);
}

const person1 = {
  name: "Vladimir",
};

sayHelloFunc.bind(person1)();

greet.bind(person1, "Hi")();
greet.apply(person1, ["Hello"]);
greet.call(person1, "Whats up");
