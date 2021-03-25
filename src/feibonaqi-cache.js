//带缓存功能  的  斐波那契数列
let cache = {};
function feibonaqiCache(n) {
  if (n < 2) return 1;

  if (cache[n]) return cache[n];

  return cache[n] = feibonaqiCache(n - 1) + feibonaqiCache(n - 2);
}
console.log(feibonaqiCache(5))


//不用缓存功能  用动态规划
function feibonaqiCache(n) {
  if (n < 2) return 1;
  let [a, b] = [1, 1]
  while (--n) {
    [a, b] = [b, a + b];
  }
  return b;
}