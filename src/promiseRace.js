let p = Promise.race([
  fetch('./resource-that-may-take-a-while'),
  new Promise((reslove, reject) => {
    setTimeout(reject=>console.error(reject), 5000);
  })
]);
p.then(console.log).catch(console.error);
// 上面代码中，如果 5 秒之内fetch方法无法返回结果，
//变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。