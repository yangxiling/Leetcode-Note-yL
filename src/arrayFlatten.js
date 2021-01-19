//数组拍平   
//如果知道数组的维数，可以使用ES6方法 arr.flat(num/Infinity)
function flatten(arr){
  let res = [];
  for(let i=0;i <arr.length; ++i){
    if(Array.isArray(arr[i])){
      arr = arr.concat(arr[i]);
    }else{
      res.push(arr[i]);
    }
  }
  return res;
}
// flatten([1, 2, [1, 2, [3, 4]], 1]);