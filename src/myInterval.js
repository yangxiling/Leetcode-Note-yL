// setTimeout 实现 setInterval
function myInterval(fn,time){
  const that = this;
  setTimeout(()=>{
    fn.call(that);//注意
    myInterval(this.fn,time)
  },time);
}