//Basic function types

function sub(x: number, y: number): number | string {
  if (x == 0) {
    return "invalid";
  } else {
    return x - y;
  }
}

console.log(sub(0, 3));

//optional parameter
//default parameter

function myName(
  firstName: string,
  lastName: string = "yan",
  middleName?: string
) {
  if (middleName) return firstName + " " + middleName + " " + lastName;
  return firstName + " " + lastName;
}
const fullName = myName("akathi", "yan");
console.log(fullName);

function callFunc(
  func: (f: string, l: string, m?: string) => string,
  param1: string,
  param2: string
) {
  func(param1, param2);
}

callFunc(myName, "Tim", "rusica");

function mul(x: number, y: number): number {
  return x * y;
}

function div(x: number, y: number): number {
  return x / y;
}

function applyFunc(
  funcs: ((a: number, b: number) => number)[],
  values: [number, number][]
): number[] {
  const results = [] as number[];
  for (let i = 0; i < funcs.length; i++) {
    const args = values[i];
    const result = funcs[i](args[0], args[1]);
    results.push(result);
  }
  return results;
}

applyFunc(
  [mul, div],
  [
    [1, 2],
    [4, 5],
  ]
);
