/*
    TypeScript utility types are built-in types that enable you to transform
    and manipulate existing types in various ways

    1) Partial utility type - takes an existing type and makes all its properties optional

    2) Readonly utlity type - Randonly is used to create a new type where all properties are readonly, meaning they
        cannot be modified once assigned a value.
    
    3) Record utility type - It helps define a type with property names such as id and map the values to the type of the data 

    4) Pick utility type - allows you to create new types by picking a set of properties from an existing type

    5) Omit utility type - constructs a new type by picking all properties from an existing type but excluding a set of keys

*/

interface Todo {
    title: string;
    description: string;
}

const updateTodo = (todo: Partial<Todo>) => {
    // ....
}


interface Todo1 {
    title: string;
}

const myTodo1: Readonly<Todo1> = {title: "Learn TypeScript"};

myTodo1.title


interface PageInfo {
    title: string
}

const pages: Record<string, PageInfo> = {
    home: { title: "Home"},
    about: { title: "About"},
    contact: { title: "Contact"},
}

const pageNumbers : Record<number, PageInfo> = {
    0: {title: "Home"},
    1: {title: "About"},
    2: {title: "Contact"}
}

interface Todo3 {
    id: number,
    title: string,
    completed: boolean;
}

type TodoPreview2 = Pick<Todo3, "title" | "completed">;

const todo: TodoPreview2 = {
    title: "Clean room",
    completed: false,
};


interface Todo4 {
    id: number,
    title: string,
    completed: boolean;
}

type TodoPreview3 = Omit<Todo4, "id" >;

const todo4: TodoPreview3 = {
    title: "Clean room",
    completed: false
}

