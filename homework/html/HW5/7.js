//反轉陣列
var temp = Deno.args;   //暫存輸入值
var array=[];

for(let i in temp){
    array[i] = parseInt(temp[i]);   //判斷輸入值為數字後代入
}

var answer = array.reverse();
console.log(array);
