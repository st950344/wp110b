//n!
var answer = 1;
function fuc(number){
    for(let i=1;i<number;i++){
        answer *= i;
    }
    return answer;
}

var input = parseInt(Deno.args[0]);

console.log(fuc(input));
