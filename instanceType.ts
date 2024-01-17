// InstanceType<Type>
// 给定一个类的构造函数类型，返回该类的实例类型

class C {
  x: string
  y: string

  constructor(x: string, y: string) {
    this.x = x
    this.y = y
  }
}

type t1 = InstanceType<typeof C>
