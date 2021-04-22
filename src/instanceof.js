//实现 instanceof；instanceof可以做 非基本类型的判断
//left 实例，right 原型对象
function myInstanceof(left,right){
  let l = left.__proto__;
  while(l){
    if(l === right.prototype) return true;
    l = l.__proto__;
  }
  return false;
}
function fun(){}
let f = new fun();
console.log(myInstanceof(f,fun));//true
console.log(myInstanceof([],Array));//true