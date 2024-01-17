// 解释Partial
// Partial<T>可以把某个接口类型中定义的属性变成可选的(Optional)

interface User {
  name: string
  age: number
  email: string
}

const updateUser = (user: User, updates: Partial<User>): User => {
  return { ...user, ...updates }
}

const originUser = {
  name: 'John',
  age: 21,
  email: 'zorroe@gmail.com',
}

const updatedUser = updateUser(originUser, { age: 20 })
console.log(updatedUser)
