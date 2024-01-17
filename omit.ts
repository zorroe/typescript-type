// 解释omit
// 从定义的类型中去除某些属性

interface User {
  name: string
  age: number
  email: string
}

const user1 = {
  name: 'Jack',
  age: 24,
  email: 'user1@gmail.com',
}

const user2: Omit<User, 'email'> = {
  name: 'Lucy',
  age: 23,
  //   email: 'user2@gmail.com',
}

const user3: Omit<User, 'email' | 'age'> = {
  name: 'Tom',
  //   age: 22,
  //   email: 'user3@gmail.com',
}

console.log(user1)
console.log(user2)
console.log(user3)
