// Literal is a textual representation (notation) of a value as it is written in source code
let colors;
colors = 'red';
let isSecure;
isSecure = true;
//Enum - Enumeration , Enums enables developers to establish a collection of named constants (enumerators), each linked with an integer value.
//Enums are treated as data types, and you can use them to create sets of constants for use with variables and properties
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 43] = "Medium";
    Size[Size["Large"] = 44] = "Large";
})(Size || (Size = {}));
var size = Size.Small; // or Size = 0;
if (size === Size.Small) {
    console.log("True");
}
else {
    console.log("False");
}
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
// let value : Direction
var Description;
(function (Description) {
    Description["Message"] = "Welcome to the typeScript world";
})(Description || (Description = {}));
console.log(Description.Message);
export {};
