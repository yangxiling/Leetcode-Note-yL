//遍历 + 递归 实现深拷贝
function deepClone(target) {
  let copy;
  if (Object.prototype.toString.call(target) === '[object Array]') {
    copy = [];
  } else if (Object.prototype.toString.call(target) === '[object Object]' && !target instanceof Function) {
    copy = {};
  } else {
    return target;
  }
  //优先使用Object.keys(obj)遍历对象，
  //而不是for...in,它会遍历继承属性
  for (let key of Object.keys(target)) {
    //先判断是不是循环引用
    if (target[key] === target) {//循环引用自身对象
      copy[key] = '__CIRCULAR__';
    } else {   //如果当前属性是对象  就递归遍历
      copy[key] = typeof target[key] == 'object' ?
        deepClone[target[key]] : target[key];
    }

  }
  return copy;
}
//test
// console.log(deepClone({name: 'jack', birth: {year: '1997', month: '10'}}))
