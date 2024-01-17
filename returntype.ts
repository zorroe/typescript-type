// ReturnType<Type>
// 从函数类型的返回值构建一个新的类型

type t1 = ReturnType<() => string>
// type t1 = string

type t2 = ReturnType<() => { name: string; age: number }>

// type t2 = {
//     name: string;
//     age: number;
// }

