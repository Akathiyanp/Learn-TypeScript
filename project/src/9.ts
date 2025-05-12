/*  OOP
        Classes & Abstract Classes
*/

/*
 access modifier

    .public - when you want anything to access it.

    .private - By making a method private, you tell other programmers that this method is not intended to be accessed directly.

            Private - when you want to essentially hide the internal state and you don't want to  allow someone else to access it.
        
            This can also prevent bugs and errors by ensuring that the internal state of an object can only be changed in 
            controlled ways.

    .protected  - If it doesn't need to be public, then make it protected.

                protected- when you want to allow subclasses to be able to access it

                    If it doesn't need to be protected, then make it private


   

*/


class Person {
    protected name: string;  //change to private and public and see the result
    constructor(name :string){
        this.name = name;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`)
    }
    // getName() {
    //     if(this.name.length < 2) return ""     //using private names by getter and setter properties
    //     return this.name
    // }
    // setName(name:string){
    //     if(name.length < 5) return
    //     this.name = name
    // }

}

// const p1 = new Person("ak");

// p1.getName()

//if protected means
    class Employee extends Person{
        callMe() {
            console.log(this.name)
        }
    }
    const p1 = new Person("rin")


/*  if private changed to public
            p1.name = 'akTheDragon'
*/ 

    /*  Protected specifies access to class members in the member-list up to the next access specifier (public or private) or the end of the class  definition
    */



    /*
        Abstract class is a restricted class that cannot be used to create objects and designed to be specifically used as
        a base class.

            Abstract class is meant to act as a base class that will be inherited from by a subclass
    */

            abstract class Animal{
                abstract makeSound(duration: number): void;
                move(duration:number){
                    console.log("Moving along...")
                    this.makeSound(duration)
                }
            }


            class Dog extends Animal {
                makeSound(duration: number): void {
                    console.log("Woof Woof")
                }

            }

            const dog = new Dog()
            dog.move(10)

            /*
                Any Abstract Method is typically gonna be utilized by a concrete implementation in the abstract class
            */