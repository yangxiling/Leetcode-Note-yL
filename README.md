# Leetcode-Note-yL
Yangmiemie‘s leetcode notebook

#### 数组去重有哪些方式？？手写数组去重

1.使用ES6的new Set()方法

 ```javascript
let newA = Array.from(new Set(arr));
 ```

2.对数组先进行sort排序，然后遍历数组，对数组去重。

```javascript
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
```

3.使用两层for循环结合splice()方法。

4.includes方法。可以判断有NaN是true。+0，-0，0都视为一样的0。

#### 数组拍平？

```javascript
function flatten(arr){
  let res = [];
  for(let i = 0;i < arr.length;++i){
    if(Array.isArray(arr[i])){
      arr = arr.concat(arr[i])
    }else{
      res.push(arr[i])
    }
  }
  return res;
}//使用Array.isArray(ele)方法判断
//如果知道数组的维数，可以使用ES6方法 arr.flat(num/Infinity)
```

#### setTimeout实现setInterval？

```javascript
function myInterval(fn,time){
  const that = this;
  setTimeout(()={
    fn.call(that);   //注意
  	myInterval(this.fn,time);
  },time)
}
```

#### 实现Promise

[实现promise](/src/promise.js)

#### 实现PromiseAll

[实现PromiseAll](./src/promiseAll.js)

#### 实现深拷贝

[实现深拷贝](./src/deepCopy.js)

#### 实现最长递增子序列

[最长递增子序列](./src/lis.js)

#### 实现bind

[bind](./src/bind.js)

#### 实现call

[call](./src/call.js)

#### 实现apply

[apply](./src/apply.js)

#### 节流

[节流-throttle](./src/throttle.js)

#### 防抖

[防抖-debounce](./src/debounce.js)

#### 函数柯里化

[柯里化-curry](./src/curry.js)

#### 实现超时机制  超出5s报错

参考ES6中，Promise.race()

```js
const p = Promise.race([
  fetch('./resource-that-may-take-a-while'),//请求一个资源需要一会
  new Promise((reslove,reject)=>{//写一个Promise5s后返回reject状态
    setTimeout(reject=>console.error(reject));
  })
])
p.then(console.log).catch(console.error);//p执行一下
```





