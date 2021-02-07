// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

//分析题：
// f(n) = f(n-1)+f(n-2)+f(n-3)+…f(1)+f(0)
// f(n-1) =f(n-2)+f(n-3)+…f(1)+f(0)
//推导：两式相减得 f(n) = 2f(n-1)
function jumpFloorII(n){
  if(n === 1) return n;

  return 2*jumpFloorII(n-1);
}
// console.log(jumpFloorII(4))