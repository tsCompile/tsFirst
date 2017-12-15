// // mixins
// class Animal {
//   mouse: false
//   act(){
//     this.mouse = true
//   }
// }
// class Plant {
//   mouse: false
//   move(){
//     this.mouse = false
//   }
// }
// // 把类当成接口，仅使用基类型而非实现，即需要在些实现类的接口
// class Aquatic implements Animal, Plant{
//   constructor(){
//     console.log(this.mouse);
//   }
//   // 提前定义的占位属性
//   move: ()=> void;
//   mouse： boolean = false;
//   act: ()=> void;
// }
// // 把mixins混入到定义的类，完成实现部分
// applyMixins(Aquatic, [Animal, Plant]);
// let obj = new Aquatic();
// obj.move();
