/*
    Type guards are a way of checking the type of a value at runtime and 
    narrowing its type in a conditional block

    .typeof
    .instanceof
    .in
    .is
    

*/
// type narrow

type StringOrNumber = string | number;

function add1(value: StringOrNumber): StringOrNumber{
    if(typeof value === "string"){
        return value + "1"

    }else{
        return value + 1
    }
} 

class Dog{
    firstName: string;
    lastName: string;
    constructor ( firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName
    }
}

class Cat{
    firstName: string;
    constructor(firstName: string){
        this.firstName = firstName; 
    }
}

function isDog(pet:Dog | Cat): pet is Dog{
    return(pet as Dog).lastName !== undefined
}

function getName(animal : Cat | Dog){
    if(isDog(animal)){ //animal instanceof Cat     "lastName" in animal
         console.log("The name is", animal.firstName + " " + animal.lastName)//this goes down
      
    }else {
         console.log("This name is", animal.firstName) //this goes up 
    }
}