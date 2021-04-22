//实现一个new
function myNew(fun, ...arg) {
  let obj = {};
  obj.__proto__ = fun.prototype;//实例化很重要的一步
  let res = fun.apply(obj, arg);
  return res instanceof Object ? res : obj;
}
 
function Animal(...name){
  this.name = name;
}

let animal = myNew(Animal,'dog','cat','pig');
console.log(animal.name);//['dog','cat','pig'];