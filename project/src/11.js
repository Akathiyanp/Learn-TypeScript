/*
    The static keyword is a non-access modifier used for methods and attributes

    Variables and methods that are associated with the class rather than with each instance of the class

    Track the number of instances that exist

    When you have some variable that belongs inside of the class

*/
var Dog = /** @class */ (function () {
    function Dog(name) {
        Dog.instanceCount++;
        this.name = name;
    }
    Dog.decreaseCount = function () {
        this.instanceCount--;
    };
    Dog.instanceCount = 0;
    return Dog;
}());
var dog1 = new Dog("tiger");
console.log(Dog.instanceCount);
var dog2 = new Dog("Cross");
console.log(Dog.instanceCount);
Dog.decreaseCount();
console.log(Dog.instanceCount);
