//Array is an collection of items, or data, stored in contiguous memory locations, also known as database systems
let array;
array = [1, 2, 3, 4, 5];
let fruits = ['apple', 'orange'];
fruits;
let nested_arr = [["hi", "hello"], ['hey']];
nested_arr;
let nested_array = [['a', 2], ['b'], ['c']];
nested_array[0].length;
nested_array[0][0];
// or
//implicit
let array2 = [1, 2, 3, 4, 5];
array2;
//Tuples - is a fixed length array that has defined values for each position in the array
//coordinate pair x, y
const coord = [1, 2, 'hi'];
console.log(coord[2]);
//tuples inside of the array
// const coordinate : [number, string[]] [] = [
//     [1,['gold','orange']], [2,['red','pink']], [3,['blue', 'sky-blue']]
// ]
const coordinate = [
    [1, [0.1, 0.2]], [2, [1.1, 1.2]], [3, [2.1, 2.2]]
];
coordinate[0][1];
export {};
