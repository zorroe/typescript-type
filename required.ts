// Required
// 将可选属性设置为必要属性

interface User {
  name?: string
  age?: number
  email?: string
}

const user1: Required<User> = {
  name: 'Tom',
  age: 22,
  email: 'user1@gmail.com',
}

console.log(user1)
