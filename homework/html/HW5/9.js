function f(number){ //number為有n個
    if(number==0) return 0;
    if(number==1) return 1;
    else return f(number-1)+f(number-2);
}

var input = parseInt(Deno.args[0]);
console.log(f(input));
