class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sayHi() {
    return `My name is ${this.name}`;
  }
}

export default Person;
