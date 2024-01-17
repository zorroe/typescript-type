// Pick<Type, Keys>
// 构造一个类型，从Type所定义的类型中把Keys所声明的给提取出来，与Omit操作相反

interface User {
  name: string
  age: number
  email: string
}

const user1: Pick<User, 'name'> = {
  name: 'Tom',
}

const user2: Pick<User, 'name' | 'age'> = {
  name: 'Jack',
  age: 22,
}

console.log(user1)
console.log(user2)
