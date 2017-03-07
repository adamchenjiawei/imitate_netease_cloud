# 熟悉前端开发以及vue基础知识

## 目标：学习Vue + 音乐播放器Demo
仿照参考：http://music.163.com/#/song?id=426881506

## 功能点&计划 （03-07 ~ 03-10 4days）

1. 音乐播放功能（03-07）
2. 音乐信息展示（03-08）
3. 音乐评论列表展示（03-09）
4. 模拟用户发送评论（03-10）


技术架构：Vue + vue-cli + Bootstrap
代码仓库：https://github.com/adamchenjiawei/imitate_netease_cloud
额外补充：单元测试&代码走查

## 学习过程
###day1：
#### 了解HTML5标签
a. 特性
* 用于绘画的canvas
* 用于媒介回放的video 和 audio 元素
* 新的特殊内容元素，比如： articale、footer、header、nav、section
* 新的表单控件，比如：calendar、date、time、email、url、search

了解 HTML各个标签使用场景
HTML5标签 http://www.w3school.com.cn/tags/index.asp

了解video标签属性 以及dom操作方法[参考](http://www.w3school.com.cn/html5/html_5_video_dom.asp)
了解audio标签属性以及dom操作方法[参考](http://www.w3school.com.cn/html5/html_5_audio.asp)
了解表单元素 [参考](http://www.w3school.com.cn/html5/html_5_form_input_types.asp)

#### 了解CSS3
[css3 2D转换](http://www.w3school.com.cn/css3/css3_2dtransform.asp)
[css3 3D转换](http://www.w3school.com.cn/css3/css3_3dtransform.asp)
[css3 动画](http://www.w3school.com.cn/css3/css3_animation.asp)
[css盒子模型](http://www.w3school.com.cn/css/css_boxmodel.asp)

CSS布局[参考](http://www.w3school.com.cn/css/css_positioning.asp)

```
元素显示与定位

一、块级元素
总是在新行上开始
高度，行高以及外边距和内边距都可以控制
例如： < h1 >< hr >< div > < p >等

二、行级元素
和其他元素都在一行上
高，行高及外边距和内边距不可改变
例如： < a >  < img > < input > < span >

三、display
规定元素的显示类型  （块级或者行级元素）
inline-block  行级元素中可以包括块级元素

四、visibility
visible hidden collapse
设置元素是否可见

* display = "none" 与 visibility ="hidden"

相同点 ： 都是隐藏
不同： display 不占位置  visibility 占空间

五、普通流
元素显示位置由元素在html代码中的位置决定的
行级 在一行水平排列
块级 从上往下

六、position

1. absolute	(从普通流中删除)
生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

2. fixed
生成绝对定位的元素，相对于浏览器窗口进行定位。
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

3. relative
生成相对定位的元素，相对于其正常位置进行定位。
因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。

4. static
默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

5. inherit
规定应该从父元素继承 position 属性的值。

七、偏移
top right left bottom
常用属性值 auto | 尺寸值 |百分比值

八、z-index
控制元素叠放次序， 值越高，元素显示位置越高

九、overflow
设置当元素的内容溢出其区域时发生的事情

`visible`	默认值。内容不会被修剪，会呈现在元素框之外。
`hidden`	内容会被修剪，并且其余内容是不可见的。
`scroll`	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
`auto`	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
`inherit`	规定应该从父元素继承 overflow 属性的值。


十、浮动

float
左浮动 left
右浮动 right
不浮动 none
碰到边缘框 或者 下一个浮动的元素时 不会浮动
都是脱离普通流的

浮动的清理
clear  left  right both none    左侧不允许浮动等
```

####Vue-cli 搭建项目
[Vue-cli](http://www.cnblogs.com/xuange306/p/6092225.html)
[yarn](http://www.jianshu.com/p/d2f88722aef9)
```
1. 安装 vue-cli

npm install -g vue-cli

2. 初始化项目

vue init webpack imitate_netease_cloud

cd imitate_netease_cloud/

yarn init

yarn

npm run dev
```




###day2



## 问题

## 资料
