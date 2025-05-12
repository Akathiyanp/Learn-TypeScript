// Literal is a textual representation (notation) of a value as it is written in source code

let colors: "red" | "blue" | "black" | "gold";

colors = 'red'

let isSecure : true

isSecure = true

//Enum - Enumeration , Enums enables developers to establish a collection of named constants (enumerators), each linked with an integer value.

//Enums are treated as data types, and you can use them to create sets of constants for use with variables and properties

enum Size {
    Small,
    Medium = 43,
    Large
}

var size: Size = Size.Small; // or Size = 0;

if(size === Size.Small)
{
    console.log("True")
}
else{
    console.log("False")
}

enum Direction {
    Up = "UP",
    Down = "DOWN"
}


// let value : Direction


enum Description {
    Message = "Welcome to the typeScript world"
}

console.log(Description.Message)