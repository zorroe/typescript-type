// Exclude<UnionType, ExcludedMembers>
// 从联合类型中排除掉部分类型

type t1 = number | string | boolean

type t2 =
  | {
      gender: number
      name: string
      age: number
    }
  | {
      gender: boolean
      name: string
      age: string
    }
  | {
      gender: string
      name: string
      age: number
    }

type t3 = Exclude<t1, boolean>
type t4 = Exclude<t2, { gender: string }>

const val1: t3 = 1
const val2: t3 = '1'

const val3: t4 = {
  gender: true,
  name: 'jack',
  age: '24',
}

const val4: t4 = {
  gender: 1,
  name: 'lucy',
  age: 23,
}

console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
