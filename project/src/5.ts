//Optional chaining and bang

//Question mark & Exclamation point - operation allows us to check and deal with undefined values within typescript
//question mark ? operator is checking and then moving forward

const arr = [{name: 'mark'},{name:'kakashi'},{name: 'itachi'}]

const el = arr.pop()?.name
el
//.pop() - removes/returns the last element from the array


const nesArr = [[{nickname: "paalpaandi"}]]
// const nesEl = nesArr.pop()?.pop()?.nickname
// const nesEl = nesArr.pop()!.pop()!.nickname
const nesEl = nesArr.pop()!
nesEl

//Exclamation point(!) = operator tells the compiler to ignore the possibility of it being undefined
//Exclamation point operator is forcing us to move forward



//exclamation point(!)operator also known as the bang