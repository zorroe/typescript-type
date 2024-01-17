// & 符号的作用
// 组合多个类型声明

interface User {
  name: string
  age: number
  email: string
}

const user1: User & { gender: string } = {
  name: 'Jack',
  age: 24,
  email: 'user1@gmail.com',
  gender: '男',
}

console.log(user1)
