/*
    The static keyword is a non-access modifier used for methods and attributes

    Variables and methods that are associated with the class rather than with each instance of the class

    Track the number of instances that exist

    When you have some variable that belongs inside of the class

*/


class Dog{
    static instanceCount: number =0;
    name: string;

    constructor (name: string){
        Dog.instanceCount++;
        this.name = name;
    }
    static decreaseCount(){
        this.instanceCount--;
    }
}

const dog1 = new Dog("tiger")
console.log(Dog.instanceCount)
const dog2 = new Dog("Cross")
console.log(Dog.instanceCount)

Dog.decreaseCount()
console.log(Dog.instanceCount)