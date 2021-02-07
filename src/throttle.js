//时间戳版
function throttle(func,wait){
  //出始 previous = 0，会让第一次出发立即执行
  let previous = 0;
  return function(){
    //保存当前 this 和 arguments 状态
    let context = this;
    let arg = arguments;
    
    //获取现在时间
    let now = new Date();
    
    //now - previous时间间隔 > wait,调用func函数
    if(now - previous > wait){
      func.apply(context,arg);
      //调用完毕，更新时间节点
      pre = now;
    }
  }
}

//定时器版
function throttle(func,wait){
  let timer;
  return function(){
    //保存上下文环境
    let context = this;
    let arg = arguments;
 
    //如果没有定时器，才会执行 func
    if(!timer){
      timer = setTimeout(()=>{
        //时间到了，清除定时器timer的id，并执行函数
        timer = null;
        func.apply(context, arg);
      },wait)
    }
  }
}