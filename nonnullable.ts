// NonNullable<Type>
// 从Type中构建类型，排除掉null 和 undefined类型

type t1 = string | number | null | undefined

type t2 = NonNullable<t1>
// type t2 = string | number

const val1: t1 = null

// const val2: t2 = null
