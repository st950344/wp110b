function integral(func,integer1,integer2){
    var answer=0;
    var dx=0.00001;
    for( let i=integer1 ; i<integer2 ; i=i+dx){
        answer += func(i)*dx;
    }
    return answer;
}


var input1 = parseInt(Deno.args[0]);

console.log(integral((x)=>x*x, 0, 1));  //func(x){ return x*x; }
