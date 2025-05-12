//Basic function types
function sub(x, y) {
    if (x == 0) {
        return "invalid";
    }
    else {
        return x - y;
    }
}
console.log(sub(0, 3));
//optional parameter
//default parameter
function myName(firstName, lastName, middleName) {
    if (middleName)
        return firstName + " " + middleName + " " + lastName;
    return firstName + " " + lastName;
}
var fullName = myName("akathi", "yan");
console.log(fullName);
