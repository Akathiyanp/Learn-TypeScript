//Advanced function types
    //  rest parameters and overload functions


function sum(str:string, ...numbers:number[]){

}
sum("hi",1,2,3)
sum("")
sum("re", 1,23,45,56,7,8,42)


//overloaded function is a function that has different call signatures and can accept different types

function getItemLength(name: string):number;
function getItemLength(names: string[]):number;//string
function getItemLength(nameOrNames: unknown): number{ //unknown
    if(typeof nameOrNames === 'string'){
        return getItemLength.length
    }else if(Array.isArray(nameOrNames)){
        return getItemLength.length // 'hello world'
    }
    return 0
}
getItemLength('')//['']['']
