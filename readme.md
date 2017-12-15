# 变量、函数、类、接口
+ module.exports
+ import, export (default)

## 类修饰符
+ public
+ private
+ protected
+ readonly
+ static
+ declare,

### interface aa{}
+ class A implements aa{}  或 class A<aa, any>{}


### 几种引入文件方式的区别：export, declare, ///<reference path=".d.ts">
+ tsc --init 生成 tsconfig.json文件
+ tsc --outFile
+ @types/module，如果没有则定义一个module (declare module) .d.ts
+ 没有@types下的模块用declare声明
+ `declare function/ const`  aa: typeof React = require(path)
+ 简写 declare module "react"
+ 非 declare module "*!text" {  export default }
+ 三斜线指令
+ `区别：模块文件根据import路径查找相应文件，查找不到再查找外部模块声明，即.d.ts文件里声明的`

+ namespace B{} ; 使用：let var: B.interfaceName;  B.className()

## 类型
+ 布尔、数字、字符串、数组、元组Tuple、枚举、Any、Void、Null、Undefined、Never、类型断言
+ 数组定义：let aa: number[] = [] 或 let aa: Array<number>
+ 元组：let aa: [string, number]
[^ 当访问赋值给越界元素，会使用联合类型替代；即属于这两个类型中的一种，否则报错]
+ 枚举：enum Color {Red=1, Green, Blue}; let c: Color = Color.Green
[为一组数值赋予友好的名字，从0开始编号，也可以手动指定]
+ 类型断言：let mm: number = (<string>arr).length;  let mm:number = (arr as string).length

## 接口 对值所具有的类型进行检查
+ interface name{ aa?: string, bb: number}
+ 只读 interface name{ readonly aa?: string, bb: number}
+ [propName: string]: any 表示obj[xxx]这样的动态属性
+ function join(source: string, subString: string): string 函数接口
+ function read(file: string, callback:(err: Error | null, data: Buffer)=>void): void    ?????
+ type 语句定义 type callbackFun = (err: Error | null, data: Buffer)=>void;
+ interface定义 interface callbackFun{   (err: Error | null, data: Buffer): void  }
+ 使用 read(file: string, callback: callbackFun){ fs.readFile(file, callback); }

+ interface name{ log(): void;}
+ 实现接口：class AA implements name{
  log(){}
}

## 函数 function aa(b: default): {cc: string, dd: number}{  }
+ 函数定义：函数、参数、:返回值类型、{ 函数体 }
+ 箭头函数：let aa:(param: number, param1 = 1)=>number = function(x, y){ return x + y; }, 默认值;
+ 默认值出现在必须参数前面时，需传入undefined值来获得默认值。
+ 剩余参数：...rest: string[]




## 泛型 类型查检与动态性
+ 返回值的类型与传入参数的类型是相同，类型变量
+ function aa<T>(param: T): T{   }; 类型变量T,帮助获取传入的类型，使用这个类型，再次使用T做为返回值类型
+ 使用：aa<string>("param")，指明T为string类型；也可以省略
+ function aa<T>(param: T[]): T[]{   };
+ let aa: <T>(arg:T)=>T = fn;
+ 带有签名的对象pb字面量：let aa: {<T>(arg:T) : T} = fn;
+ 泛型接口：？？？？
interface aa {
  <T>(arg: T): T;
}

+ 泛型类：class AA<T>{  }
+ 约束：interface other{ length: number;}  function aa<T extends other>(arg: T): T{}
+ function aa<T, K extends keyof T>(obj: T, key: K){}
+ 类类型：function aa<T>(c: {new(): T}): T{}

## 交叉类型，多种类型叠加到一起成为一种类型
+ function mm<T, u>(a: T, b: U): T & U{  let result = <T & U>{}; (<any>result)[id]  }

## 联合类型
+ aa: string | number
+ 类型断言：(<AA>pet)

## 配置
+ module: commonjs, moduleResolution: node 表示是一个Node项目，commonjs模块机制
+ target: ES6 编译到ES6
+ rootDir, outDir 输入、输出目录
+ sourceMap
+ noImplicit 开头的几个选项指定一些更严格的检查
+ declaration 自动生成声明文件，不是使用Typescript编写的模块，通过@types/module来安装


## Symbol 不可改变且唯一，用做对象属性的键
+ hasInstance, isConcatSpreadable对象的数组元素是否可展开, iterator, match, replace, search, species派生对象, split, to Primitive对象转换为相应的原始值, toStringTag, unscopables
+ for of调用Symbol.iterator方法
+ for of迭代的是值, for in迭代的是key
+ Map, Set


## 混入 Mixin
## 装饰器
## JSX
+ .tsx扩展名
+ 配置jsx选项：preserve, react, react-native
+ 断言、不可以用<>操作符，as操作符

## 装饰器


## 三斜线指令，包含XML标签的单行注释，仅可包含它的文件的最顶端，其前面只能为注释(单行或多行)
+ 语句或声明之后，被当作普通的单行注释；
+ 用户声明文件间的依赖，告诉编译器在编译过程中要引入的额外文件
+ 与tsconfig.json 中的files一样，

## 类型检查
+ js检查----checkJs  通过@ts-nocheck来忽略检查  @ts-ignore忽略本行错误
+ JSDos 注解修饰的声明  /** @type {number} */会被设置这个声明的类型   /** @type {{a: number}} */
+ 对象字面量有默认的索引签名[x: string]:any, 可以当成是开放的映射面不是封闭的对象，指定上面的类型后，不可再添加属性。
+ 函数参数被当做可选的，如果想要传的的参数大于接收的 使用：/** @param {string} [somebody] - Somebody's name. */
+ extends中  /**  @augments {Component<{a: number}, State>} */  泛型参数   /** @type{Array.<number>} */



## 编译运行
+ tsc index.ts
+ ts-node index.ts
+ 安装包 @types/module
+ XX.d.ts声明文件  declare module


## 疑问
+ 安装typings
+ typings install 相关模块

### webpack.ProvidePlugin, resolve.alias, extenerals
