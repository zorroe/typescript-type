// Readonly
// 将属性设置为只读属性，在创建时第一次赋值之后不可修改

interface User {
  name: string
  age: number
  email: string
}

const user1: Readonly<User> = {
  name: 'Jack',
  age: 22,
  email: 'user1@gmail.com',
}

// user1.age = 23

const user2: Readonly<Partial<User>> = {
  name: 'Jack',
  age: 22,
}

// user1.email = 'user2@gmail.com'

console.log(user1)
console.log(user2)
