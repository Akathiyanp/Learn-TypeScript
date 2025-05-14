/*
    It allows us to have more flexible functions, methods, classes, etc.
    that can accept any different data types
*/

class DataStore<T>{

    private items: T[] = [];
    
    addItem(item: T): void{
        this.items.push(item)
    }

    getItem(index: number): T{
        return this.items[index];
    }

    removeItem(index: number): void {
        this.items.splice(index, 1)
    }

    getAllItems(): T[] {
        return this.items;
    }
}

interface User {
    name: string;
    id: number;

}
const data = new DataStore<User>()
data.getItem(1)



function getValue<K, V>(key:K, value1: V, value2: V):V {
    if(key){
        return value1;
    }
    return value2
}
const n1: number=1;
const n2: number=2;

getValue("Hello", n1, n2 )

