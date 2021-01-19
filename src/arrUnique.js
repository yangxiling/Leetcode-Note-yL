//方法一
let newA = Array.from(new Set(arr));

//方法二：对数组先进行sort排序，然后遍历数组，对数组去重

function unique(arr){
	let newArr = arr.concat().sort();
  let res = [newArr[0]];
  for(let i =1;i<newArr.length;++i){
    if(newArr[i] !== newArr[i-1]){
      res.push(newArr[i]);
    }
  }
  return res;
}

// 3.使用两层for循环结合splice()方法。

// 4.includes方法。可以判断有NaN是true。+0，-0，0都视为一样的0。