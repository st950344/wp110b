class Ratio{
    constructor(a,b){   //建構子
        this.a=a;
        this.b=b
    }
    toString(){
        return this.a+'/'+this.b;
    }
    reduce(){
        for( let i=1;i<=this.b;i++){
            if( this.a%i==0 && this.b%i==0 ){
                this.a = this.a/i;
                this.b = this.b/i;
            }
        }
        return new Ratio(this.a,this.b);    // 產生新輸出
    }
}

var r1 = new Ratio(6,9); 
var answer = r1.reduce();
console.log(answer.toString()); 
