// Literal is a textual representation (notation) of a value as it is written in source code
let colors;
colors = 'red';
let isSecure;
isSecure = true;
//Enum - Enumeration , Enums enables developers to establish a collection of named constants (enumerators), each linked with an integer value.
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var size = Size.Small; // or Size = 0;
if (size === Size.Small) {
    console.log("True");
}
else {
    console.log("False");
}
export {};
