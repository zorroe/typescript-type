// Extract<Type, Union>
// 构建一个类型，这个类型是Type中符合Union类型的子集

type t1 = Extract<number | string | boolean, string | Function>

// type t1 = string

const val1: t1 = 'a'

type t2 = Extract<
  | { name: string; age: number }
  | { name: string; age: string }
  | { name: boolean; age: number },
  { name: string }
>

// type t2 = {
//     name: string;
//     age: number;
// } | {
//     name: string;
//     age: string;
// }

const val2: t2 = { name: 'lucy', age: 20 }
