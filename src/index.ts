import Person from './Person';

const joe = new Person('MOE');

document.getElementById('app')
  .innerHTML = joe.sayHi();
