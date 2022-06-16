//判斷是否能整除3.5.7
var array=[];
function fuc(a,b){
    for(let i=a;i<=b;i++){
        if(i%3!=0 && i%5!=0 && i%7!=0 ){
            array.push(i); //若無法被3,5,7整除，就加入array的尾端
        }
    }
    return array;
}

var input1 = parseInt(Deno.args[0]);
var input2 = parseInt(Deno.args[1]);

console.log(fuc(input1,input2));

//console.log(fuc(5,15));
