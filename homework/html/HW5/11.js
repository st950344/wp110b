class Ratio{
    constructor(a,b){   //建構子
        this.a=a;
        this.b=b
    }
    toString(){
        return this.a+'/'+this.b;
    }
}

var r1 = new Ratio(1,3); 
console.log(r1.toString());
