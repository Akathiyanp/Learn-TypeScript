/*  Classes & Interfaces
        1) concrete class         2) abstract class
*/
/* Implementing an interface
        Interface doesn't actually define any functionality or behavior

            We define it, we write it out, we declare its existence, we don't implement all of the functionality

            We define any of the methods or properties that exist on the interface



*/

interface Animal {
    speak(): void
}

class Dog implements Animal {
    private name: string;
    private color: string;

    constructor (name: string, color: string){
        this.name = name;
        this.color = color;
    }
    speak(){
        console.log(` I am ${this.name} and I am  ${this.color}`)

    }
    test(){
        return 1
    }
}
// const dog: Animal = new Dog("tiger", "white")


class Cat implements Animal {
    speak(){
        console.log("Meow Meow")
    }
}


const dog = new Dog("tiger", "cross")
const cat = new Cat()


const animal:Animal = dog;
const animals: Animal[] = [cat, dog]

function makeSound(animal: Animal){ 
    animal.speak()

}
makeSound(dog)
makeSound(cat)

/* We look at an object through the lens of a specific interface

        you can use an interface when there's no functionality that you want to define concretely

        By using an abstract class, you are going to be writing a behavior that will be reuse by
        one of the concrete classes.
        
       */
