// Parameters<Type>
// 根据类型为函数类型的参数构建新的元组类型

type t1 = Parameters<() => {}>
// type t1 = []

type t2 = Parameters<(arg1: string, arg2: string) => {}>
// type t2 = [arg1: string, arg2: string]

type t3 = Parameters<(arg: { name: string; age: number }) => {}>
// type t3 = [arg: {
//     name: string;
//     age: number;
// }]
