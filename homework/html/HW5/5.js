//陣列的值的平均
var input = Deno.args;  //令input為輸入陣列
var sum = 0 , count=0;
var answer;

for(let i in input){    // i為索引值，直到無索引值，結束
    var temp = parseInt(input[i]); //判斷是否為數字，若是則帶入
    sum+=temp;
    count++;
}

answer=sum/count;

console.log(answer);
