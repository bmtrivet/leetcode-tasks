abstract class Shape {
  abstract area(): number;
  abstract describe(): void;

  protected testMethod() {
    console.log("Test method");
  }
}

class Rectangle extends Shape {
  static name = "Rectangle";
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  override area() {
    return this.width * this.height;
  }

  override describe() {
    return `${this.constructor.name}: width=${this.width}, height=${
      this.height
    }, area=${this.area()}`;
  }

  callTestMethod() {
    super.testMethod();
  }
}

// const r1 = new Rectangle(1, 2);
// r1.callTestMethod();

class Circle extends Shape {
  static name = "Circle";
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  override area() {
    return this.radius * this.radius * Math.PI;
  }

  override describe() {
    return `${this.constructor.name}: radius=${
      this.radius
    }, area=${this.area().toFixed(2)}`;
  }
}
const shapes: Shape[] = [new Rectangle(10, 4), new Circle(3)];

// for (const shape of shapes) {
//   console.log(shape.describe());
// }

/////////////////////////////////

class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value <= 0) {
      throw new Error("Age must be positive");
    }
    this._age = value;
  }
}

const p = new Person(25);
// console.log(p.age);

p.age = 30;
// console.log(p.age);
