/*
    Type aliases, allow you to create custom names for complex types, making your code more readable and maintainable.

    When we define something that isn't neccessarily an object

    We cannot implement / extend the type

*/

type Coordinate = [number, number]
type List = string[][]


function compareCoords(
  p1: Coordinate,
  p2: Coordinate
): Coordinate {
  return [p1[0], p2[1]];
}


const coords: [number, number][] = [];



