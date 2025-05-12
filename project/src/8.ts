/* Interfaces is a programming structure/syntax that allows the computer to enforce certain properties on an object(class)

        Interfaces allows us to interact with more complex objects and understand what properites they have
*/
interface Person {
  name: string;
  age: number;
  salary?: number;
  // hello: () =>void;
}
const person: Person = {
  name: "ak",
  age: 21,
  salary: 100000,
  // hello: function(){
  //     console.log(this.name + "says hi")
  // }
};
person.age;
person.name;
// person.hello()

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "akathi",
  age: 22,
  salary: 1000000,

  employeeId: 1,
};

interface Manager extends Employee, Person {
  employees: Person[];
}

// const manager : Manager = {

// }

function getPerson(p: Person): Person {
  return {
    name: "adg",
    age: 21,
  };
}

// Use an interface when you want to type in object that has different properties

// An interface can extend another interface and the child interface inherits the methods of the parent interface
