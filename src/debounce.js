//节流和防抖本质上不一样   
//防抖是将多次执行变为一次
//节流是每隔一段时间执行一次
//非立即执行版
function debounce(func, wait, immediate) {
  let timer;
  return function () {
    //记录当前 this 和 arguments 的状态
    let context = this;
    let arg = arguments;

    //如果有定时器 清除定时器
    if (timer) clearTimeout(timer);

    //创建新的定时器，并用apply调用函数（保证调用时this的环境和参数不变）
    timer = setTimeout(() => {
      func.apply(context, arg)
    }, wait);
  }
}

//立即执行版

function debounce(func, wait) {
  let timer;
  return function () {
    //记录当前 this 和 arguments 的状态
    let context = this;
    let arg = arguments;

    //如果有定时器 清除定时器
    if (timer) clearTimeout(timer);

    //定义callNow = !timer
    let callNow = !timer;

    //wait时间后清除定时器
    //即在wait时间后事件才会执行
    timer = setTimeout(() => {
      // 时间解说，清除timer 的 id
      timer = null;
    }, wait)

    //如果callNow为true，即timer为null
    //就执行func函数
    if (callNow) func.apply(context, arg)
  }
}