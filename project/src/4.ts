//Any type - allows for flexible typing  but sacrifices type safety as it lacks compile-time type checking

// you use 'any type' typically when you're in a very complex situation and you're not able to predict what the type of the variable gonna be

let a: any = 1;
console.log(a);

//Unknown type - is a type-safe counter part to the 'any type'

// Unknown type = provides a powerful way to handle values of uncertain types while maintaining type safety

let x: unknown = "hi";

if (typeof x == "number") {
  const result = x + 1;
  console.log(result);
} else if (typeof x == "string") {
  const result = x + " rin";
  console.log(result);
}

//type cast

let x2: unknown = 1;

const result2 = (x2 as number) + 1;
console.log(result2);

let message: unknown = "Hi";

const messageResult = (message as string) + " madara";
console.log(messageResult);

//runtime error occurs

// let msg: unknown = 1;
// const res = (msg as number[][])[0][1];
// console.log(res);

function processFeedback(input: unknown) : void {
    if(typeof input === "number")
    {
        console.log(`Processing rating: ${input}`)
    }
    else if(typeof input === 'string'){
        console.log(`Processing text: ${input}`)
    }
    else if(input instanceof Blob){
        //Handle Blob-specific logic
    }else{
        console.log('Unsupported type of input')
    }
}

processFeedback(1)
processFeedback("hi")
processFeedback(new Blob())
processFeedback([1,2,3])