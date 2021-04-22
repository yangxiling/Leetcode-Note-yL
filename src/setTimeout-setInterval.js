function my_setInterval(fn, time) {
  let context = this;
  setTimeout(() => {
    fn.call(context);
    my_setInterval(fn, time);
  }, time);
}