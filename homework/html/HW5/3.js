//質數判斷
function isPrime(number){
    for (let i=2;i<number;i++) {
        if (number%i == 0) {
            return false;
        }
    }
    if(number==1){
        return false;
    }    
    return true;
}
var input = parseInt(Deno.args[0]);
console.log(isPrime(input));
