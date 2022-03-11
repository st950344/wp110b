# STYLE
設定樣式
## Color 顏色  
表示方法
+ color name 顏色名稱
+ color value 色碼

![color](https://github.com/st950344/wp110b/raw/main/picture/week1/14_color.jpg)

### background color
#### 全頁背景
```
<body style="background-color:顏色;">文字.</body>
```
![bg_333333](https://github.com/st950344/wp110b/raw/main/picture/week1/1_background_333333.jpg)
> 連續相同數字色碼：數字越小表示越黑
#### 標題背景
```
<h1 style="background-color:顏色;">文字</h1>
```
![bg_title](https://github.com/st950344/wp110b/raw/main/picture/week1/2_background_title.jpg)
### border color
```
<改變區域 style="border:空間大小px solid 顏色;">文字</改變區域>
```
![border](https://github.com/st950344/wp110b/raw/main/picture/week1/15_border.jpg)

### text color
```
<改變區域 style="color:顏色;">文字</改變區域>
```
![text-color](https://github.com/st950344/wp110b/raw/main/picture/week1/3_text-color.jpg)
## Fonts 字型
```
<改變區域 style="font-family:字型;">文字</改變區域>
```
常用字型
+ Verdana 標準字體
+ Monospace 等寬字體
+ Courier 等寬的粗襯線字體
+ Cursive 草書字體
+ Fantasy 具有特殊藝術效果的字體

![font](https://github.com/st950344/wp110b/raw/main/picture/week1/4_font.jpg)
> 非優秀布局，應寫在css內。

## Text size 字體大小
```
<改變區域 style="font-size:大小;">文字</改變區域>
```
![text-size](https://github.com/st950344/wp110b/raw/main/picture/week1/5_text-size.jpg)

## Text alignment 文字位置
```
<改變區域 style="text-align:對齊方式;">文字</改變區域>
```
對齊方式
+ left 靠左
+ center 置中
+ right 靠右
+ justify 左右皆對齊 (須設定文字所處空間寬度才能看出差異)

![align](https://github.com/st950344/wp110b/raw/main/picture/week1/6_align.jpg)


# FORATTING 
格式化文字
### 粗體
```
<b>文字</b>
<strong>文字</strong>
```
![bold](https://github.com/st950344/wp110b/raw/main/picture/week1/7_bold.jpg)
### 斜體
```
<i>文字</i>
<em>文字</em>
```
![italic](https://github.com/st950344/wp110b/raw/main/picture/week1/8_italic.jpg)
### 上標/下標
```
<sup>文字</sup>
<sub>文字</sub>
```
![sup+sub](https://github.com/st950344/wp110b/raw/main/picture/week1/9_sub+sup.jpg)
> 常用於數學公式。
### 改小字體
```
<small>文字</small>
```
![small](https://github.com/st950344/wp110b/raw/main/picture/week1/10_small.jpg)
> 不優，應該使用css來表示。
### 標記(螢光筆)
```
<mark>文字</mark>
```
![mark](https://github.com/st950344/wp110b/raw/main/picture/week1/11_mark.jpg)
### 刪除線/底線
```
刪除線 <del>文字</del>
底線  <ins>文字</ins>
```
![del+ins](https://github.com/st950344/wp110b/raw/main/picture/week1/12_del+ins.jpg)


# QUOTATION
引用格言，縮排顯示。
```
<blockquote cite="引用網址"> 文字 </blockquote>
```

# COMMENT  
註解，不會顯示在網頁。
```
<!--文字-->
```
![comment](https://github.com/st950344/wp110b/raw/main/picture/week1/13_comment.jpg)

# LINK
超連結。
```
<a hreh="網址" target="限制" title="文字">點選即可開啟超連結的文字、圖片(包含設定)...</a>
```
### 網址
**一.  asolute URLs vs relative URLs  絕對網址vs相對網址**  

relative URLs
+ 直接輸入檔案名稱 or 輸入根目錄  
+ ***！限制！ 相同網站才可使用***

![URLs](https://github.com/st950344/wp110b/raw/main/picture/week1/17_URLs.jpg)  

**二.  mail**  
按下超連結時，具有寄送郵件的功能。
```
<a href="郵件位置"></a>
```
### Target
為開啟超連結方式。 

數值
+ _self 同一視窗(預設)
+ _blank  新視窗
+ _parent 上層視窗
+ _top  引用最上層視窗

![youtube](https://github.com/st950344/wp110b/raw/main/picture/week1/16_youtube.jpg)
### Title
滑鼠移上去顯示的文字。
### 超連結開啟方式
+ text (預設)
點擊文字導引到網頁。
+ image
點擊圖片導引到網頁。

![image_link](https://github.com/st950344/wp110b/raw/main/picture/week1/18_image_link.jpg)
+ button
產生按鈕，點擊後導引到網頁。
```
<button onclick="document.location='網頁'">按鈕上文字</button>
```
![button](https://github.com/st950344/wp110b/raw/main/picture/week1/19_button.jpg)
> JavaScript語法
## Bookmark 書籤
導引到關鍵詞所處位置。
```
<id="名稱">
<a href="#名稱"></a>
```
![bookmark](https://github.com/st950344/wp110b/raw/main/picture/week1/20_bookmark.jpg)

# IMAGE
```
<img src="圖片位址" alt="顯示失敗時的替代文字" width="?" height="?"/>
<img src="圖片位址" alt="顯示失敗時的替代文字" title="名稱" style="width:?px;height=?px;"/>
```
![image](https://github.com/st950344/wp110b/raw/main/picture/week1/21_image.jpg)
## Image maps
點擊圖片不同區域導向不同網址。
```
<img src="位置" alt="顯示失敗時的替代文字" width="?" height="?" usemap="#名稱"/>
<map name="名稱">
  <area shape="觸發範圍的圖形樣式" coords="數值(對應shape)" alt="替代文字" href="網址">
</map>
```
### shape & coords
|shape|coords|
|:-:|:-:|
|rect  矩形|x1,y1,x2,y2，對角兩個點的座標值|
|circ  圓形|x,y,radius，圓心座標&半徑|
|poly  不規則|x1,y1,x2,y2,…,xn,yn，所有多邊形的點的座標值|
> 需用影像軟體定位座標。

![map](https://github.com/st950344/wp110b/raw/main/picture/week1/22_map.jpg)

# Picture
替代(更換)原先圖片。  
```
<picture>
  <source media="(min-width:?px)" srcset="圖片位址">
  <img src="圖片位址" style="圖片樣式;">
</picture>
```
### source
依據source內的條件判斷應該顯示哪張圖片。
+ media  
判斷條件。  
若成立，則顯示該source內的srcset所導向的圖片。
> min-width 視窗寬度
+ img  
若條件皆不成立(source=fault)，則顯示該圖片。
### 用途
調整圖片  
![picture1](https://github.com/st950344/wp110b/raw/main/picture/week1/23_picture1.jpg)

![picture2](https://github.com/st950344/wp110b/raw/main/picture/week1/24_picture2.jpg)

![picture3](https://github.com/st950344/wp110b/raw/main/picture/week1/25_picture3.jpg)

提供替代檔案格式  (**不設定media**)

![picture](https://github.com/st950344/wp110b/raw/main/picture/week1/26_picture.jpg)

# FAVICON
在頁籤上顯示的icon。
```
<link rel="替代名稱" href="icon圖片所在的網頁" type="image/x-icon">
```

# TABLE
建立表格。
```
<html>
<head>
<style>表格樣式設定</style>
</head>

<body>
<table>
  <capation>標題</capation>
  <tr>
    <th>標題欄文字</th>
  </tr>
  <tr>
    <td>內容欄文字</td>
  </tr>
</table>
</body>
```
![table](https://github.com/st950344/wp110b/raw/main/picture/week1/27_table.jpg)
> 統整圖

### capation
表格標題。
### tr
row，列。
### th
column-header，標題欄 (粗體顯示)。
### td
column，內容欄。
## Border
設定表格邊線樣式。  
```
<style>
table,th,td{
  border: 粗度(px) 樣式 顏色; 
  border-collapse:設定值;
  border-radius:?px;
  padding:?px;
  spacing:?px;
}
</style>
```
### border
可單獨設置。
+ border-top
+ border-bottom
+ border-left
+ border-right
### border-style
+ solid 實線框
+ dotted 點線框
+ dashed 分段線
+ double 雙線框
+ ridge 立體浮凸框
+ none 無框線
### border-collapse
單個格子的邊界樣式。  
+ separate (預設)單獨邊框。
+ collapse 共享邊界。
### border-radius
單格表格的圓弧程度。  
數值越大，越圓。
### padding
內部物件與單格邊框距離。
### spacing
單格與整個表格邊框的距離。

格式
+ padding:上 右 下 左;
+ padding:上&下 左&右;
+ padding:上 左&右 下;
+ padding:四個邊具有相同値;
## Table width
```
<table style="?%">...</table>
```
> 可設定單個tr、th所占比例。
## 合併儲存格
### colspan
左右合併。
```
<欄or列 colspan="合併格子的數量"></欄or列>
```
### rowspan
上下合併。
```
<欄or列 rowspan="合併格子的數量"></欄or列>
```
## 特殊填色方式
### zebra 
```
<style>
t_:nth-child(even/odd){
  background-color:顏色;
}
</style>
```
### hoverable
根據滑鼠移動而產生顏色。
```
t_:hover{
  background-color:顏色;
}
```
## Colgroup
行(column)的群組。
```
<colgroup>
  <col span="選取欄數" style="欲改變的樣式">
</colgroup>
```
![cologroup](https://github.com/st950344/wp110b/raw/main/picture/week1/28_cologroup.jpg)

# 
