class Ratio{
    constructor(a,b){   //建構子
        this.a=a;
        this.b=b
    }
    toString(){
        return this.a+'/'+this.b;
    }
    add(r){
        this.a = this.a * r.b + r.a * this.b;   // this.a=1,this.b=3 ; r.a=2,r.b=4
        this.b = this.b * r.b;
        return new Ratio(this.a,this.b);    // 產生新輸出
    }
    sub(r){
        this.a = this.a * r.b - r.a * this.b;
        this.b = this.b * r.b;
        return new Ratio(this.a,this.b);
    }
    mul(r){
        this.a = this.a * r.a;
        this.b = this.b * r.b;
        return new Ratio(this.a,this.b);
    }
    div(r){
        this.a = this.a * r.b;
        this.b = this.b * r.a;
        return new Ratio(this.a,this.b);
    }
}


var r1 = new Ratio(1,3);
var r2 = new Ratio(2,4);

var r3 = r1.add(r2);
var r1 = new Ratio(1,3);    //每做一次計算需恢復原值，因為會被洗掉

var r4 = r1.sub(r2);
var r1 = new Ratio(1,3);

var r5 = r1.mul(r2);
var r1 = new Ratio(1,3);

var r6 = r1.div(r2);
var r1 = new Ratio(1,3);

console.log("add = %s",r3.toString());
console.log("sub = %s",r4.toString());
console.log("mul = %s",r5.toString());
console.log("div = %s",r6.toString());
