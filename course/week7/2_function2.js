function square(x) {
    return x*x;     //3
}

var h = 0.001

function df(f, x) {
    return (f(x+h) - f(x))/h    //2_return: (square(5+0.001)-square(5)) / 0.001
  }

console.log(df(square,5))   //1_先看所求
