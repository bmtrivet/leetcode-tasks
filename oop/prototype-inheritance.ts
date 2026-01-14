interface AnimalInstance {
  name: string;
  speak: () => void;
}

interface DogInstance extends AnimalInstance {
  age: number;
  bark: () => void;
}

interface AnimalConstructor {
  new (name: string): AnimalInstance;
  prototype: AnimalInstance;
}

interface DogConstructor {
  new (name: string, age: number): DogInstance;
  prototype: DogInstance;
}

const Animal: AnimalConstructor = function (
  this: AnimalInstance,
  name: string
) {
  this.name = name;
} as any;

Animal.prototype.speak = function () {
  console.log("Hello, my name is " + this.name);
};

const animal = new Animal("Cat");

animal.speak();

///////////////////////

const Dog: DogConstructor = function (
  this: DogInstance,
  name: string,
  age: number
) {
  this.age = age;
  Animal.call(this, name);
} as any;

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof Woof");
};

Dog.prototype.speak = function () {
  console.log(
    "Woof! My name is " + this.name + " and I am " + this.age + " years old."
  );
};

const dog = new Dog("Billy", 5);

dog.speak();

dog.bark();
