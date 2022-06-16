var getFlag=function (id) {
return document.getElementByIdx_x(id);  //獲取元素引用
}
var extend=function(des, src) {
for (p in src) {
des[p]=src[p];
}
return des;
}
var clss=['one','two','three','four','five','six','seven','eight','nine','ten'];
var Ball=function (diameter,classn) {
var ball=document.createElement_x("div");
ball.className=classn;
with(ball.style) {
width=height=diameter 'px';position='absolute';
}
return ball;
}
var Screen=function (cid,config) {
//先建立類的屬性
var self=this;
if (!(self instanceof Screen)) {
return new Screen(cid,config)
}
config=extend(Screen.Config, config)  //configj是extend類的例項
self.container=getFlag(cid);      //視窗物件
self.ballsnum=config.ballsnum;
self.diameter=56;            //球的直徑
self.radius=self.diameter/2;
self.spring=config.spring;       //球相碰後的反彈力
self.bounce=config.bounce;       //球碰到視窗邊界後的反彈力
self.gravity=config.gravity;      //球的重力
self.balls=[];             //把建立的球置於該陣列變數
self.timer=null;            //呼叫函式產生的時間id
self.L_bound=0;            //container的邊界
self.R_bound=self.container.clientWidth;
self.T_bound=0;
self.B_bound=self.container.clientHeight;
};
Screen.Config={             //為屬性賦初值
ballsnum:10,
spring:0.8,
bounce:-0.9,
gravity:0.05
};
Screen.prototype={
initialize:function () {
var self=this;
self.createBalls();
self.timer=setInterval(function (){self.hitBalls()}, 30)
},
createBalls:function () {
var self=this, num=self.ballsnum;
var frag=document.createDocumentFragment();  //建立文件碎片，避免多次重新整理    
for (i=0;i<num;i  ) {
var ball=new Ball(self.diameter,clss[ Math.floor(Math.random()* num )]);
ball.diameter=self.diameter;
ball.radius=self.radius;
ball.style.left=(Math.random()*self.R_bound) 'px'; //球的初始位置，
ball.style.top=(Math.random()*self.B_bound) 'px';
ball.vx=Math.random() * 6 -3;
ball.vy=Math.random() * 6 -3;
frag.appendChild(ball);
self.balls[i]=ball;
}
self.container.appendChild(frag);
},
hitBalls:function () {
var self=this, num=self.ballsnum,balls=self.balls;
for (i=0;i<num-1;i  ) {
var ball1=self.balls[i];
ball1.x=ball1.offsetLeft ball1.radius;   //小球圓心座標
ball1.y=ball1.offsetTop ball1.radius;
for (j=i 1;j<num;j  ) {
var ball2=self.balls[j];
ball2.x=ball2.offsetLeft ball2.radius;
ball2.y=ball2.offsetTop ball2.radius;
dx=ball2.x-ball1.x;           //兩小球圓心距對應的兩條直角邊
dy=ball2.y-ball1.y;
var dist=Math.sqrt(dx*dx   dy*dy);    //兩直角邊求圓心距
var misDist=ball1.radius ball2.radius;  //圓心距最小值
if(dist < misDist) {          
//假設碰撞後球會按原方向繼續做一定的運動，將其定義為運動A  
var angle=Math.atan2(dy,dx);
//當剛好相碰，即dist=misDist時，tx=ballb.x, ty=ballb.y
tx=balla.x Math.cos(angle) * misDist; 
ty=balla.y Math.sin(angle) * misDist;
//產生運動A後，tx > ballb.x, ty > ballb.y,所以用ax、ay記錄的是運動A的值
ax=(tx-ballb.x) * self.spring; 
ay=(ty-ballb.y) * self.spring;
//一個球減去ax、ay，另一個加上它，則實現反彈
balla.vx-=ax;             
balla.vy-=ay;
ballb.vx =ax;
ballb.vy =ay;
}
}
}
for (i=0;i<num;i  ) {
self.moveBalls(balls[i]);
}
},
moveBalls:function (ball) {
var self=this;
ball.vy =self.gravity;
ball.style.left=(ball.offsetLeft ball.vx) 'px';
ball.style.top=(ball.offsetTop ball.vy) 'px';
//判斷球與視窗邊界相碰，把變數名簡化一下
var L=self.L_bound, R=self.R_bound, T=self.T_bound, B=self.B_bound, BC=self.bounce; 
if (ball.offsetLeft < L) {
ball.style.left=L;
ball.vx*=BC;
}
else if (ball.offsetLeft   ball.diameter > R) {
ball.style.left=(R-ball.diameter) 'px';
ball.vx*=BC;
}
else if (ball.offsetTop < T) {
ball.style.top=T;
ball.vy*=BC;
}
if (ball.offsetTop   ball.diameter > B) {
ball.style.top=(B-ball.diameter) 'px';
ball.vy*=BC;
}
}
}
window.onload=function() {
var sc=null;
getFlag('start').onclick=function () {
document.getElementByIdx_x("inner").innerHTML='';
sc=new Screen('inner',{ballsnum:10, spring:0.8, bounce:-0.9, gravity:0.05});
sc.initialize();
}
getFlag('stop').onclick=function() {
clearInterval(sc.timer);
}
}
