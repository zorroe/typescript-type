// Record<Keys, Type>
// 构造一个对象类型，对象的key分别来自于Keys，每个key所对应的value是Type所定义的类型

interface CatInfo {
  age: number
  breed: string
}

type CatName = 'mifei' | 'jasca' | 'modalin'

const cats: Record<CatName, CatInfo> = {
  mifei: {
    age: 2,
    breed: 'lin',
  },
  jasca: {
    age: 4,
    breed: 'momo',
  },
  modalin: {
    age: 3,
    breed: 'tinr',
  },
}

console.log(cats)
