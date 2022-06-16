//因數分解
var array=[];

function isPrime(inter){
    for (let j=2;j<inter;j++) {
        if (inter%j == 0) {
            return false;
        }
    }
    if(inter==1){
        return false;
    }    
    return true;
}

function factor(number){
    for(let i=2;i<number;i++){
        if(isPrime(number)){    //若為質數，就不繼續執行下去。
            break;
        }
        if(number%i==0){
            array.push(i);
            number=number/i;
            factor(number);
        }
    }
    return array;
}

var input = parseInt(Deno.args[0]);
console.log(factor(input));
