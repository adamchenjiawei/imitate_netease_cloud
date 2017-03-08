[TOC]
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

1. 修复昨天单元测试执行出错问题
2. 调整播放界面布局 显示歌曲基本信息（标题、歌手、专辑、歌词等信息）
3. 实现播放按钮控制音频播放
[nodejs版本更新](http://blog.csdn.net/sruru/article/details/46301405)
```
npm 版本更新

npm install -g npm

nodejs 版本更新

1. 检查 Node的当前版本，使用命令
node -v

2. 清除npm cache
sudo npm cache clean -f

3. 安装n模块
sudo npm install -g n

4. 升级到最新版本
sudo n 0.8.11
或者你也可以告诉管理器，安装最新的稳定版本
sudo n stable

```





## 问题

### 单元测试执行出错；(03-07)
**a. 出错信息： 未安装PhantomJS**
```
08 03 2017 10:31:58.022:ERROR [launcher]: No binary for PhantomJS browser on your platform.
  Please, set "PHANTOMJS_BIN" env variable.
08 03 2017 10:31:58.025:ERROR [karma]: [TypeError: Cannot read property 'stderr' of undefined]
TypeError: Cannot read property 'stderr' of undefined

```

解决方法：

参考资料：
[切换npm源](http://blog.csdn.net/fjnjxr/article/details/53462422)
[安装PhantomJS](http://blog.csdn.net/xuexiiphone/article/details/52233352)
```
1. 切换npm源
npm config set registry http://registry.npm.taobao.org/

2. 安装PhantomJS (翻墙下载安装  有点慢)
sudo npm install -g karma-phantomjs-launcher

3. 配置环境变量（MacOS）
vim ~/.bash_profile

增加
export PHANTOMJS_BIN=/usr/local/lib/node_modules/karma-phantomjs-launcher/node_modules/phantomjs-prebuilt/bin/phantomjs

source ~/.bash_profile


```

**b. 出错信息：未安装latest**
```
08 03 2017 13:29:37.307:WARN [reporter]: SourceMap position not found for trace: undefined
PhantomJS 2.1.1 (Mac OS X 0.0.0) ERROR
  Error: Module build failed: Error: Couldn't find preset "latest" relative to directory "/Users/adam/Documents/private_repo/imitate_netease_cloud"

```

解决方案：
[参考](https://segmentfault.com/q/1010000006005280/a-1020000006008290)
[.babelrc](https://zhuanlan.zhihu.com/p/24224107)
```
安装latest

sudo npm install -save-dev babel-preset-latest
```

**c. 出错信息：selenium sever 启动出错**
```
Starting selenium server... There was an error while starting the Selenium server:

Exception in thread "main" java.lang.UnsupportedClassVersionError: org/openqa/grid/selenium/GridLauncherV3 : Unsupported major.minor version 52.0

```

解决方法：
[参考](http://www.cnblogs.com/plus-chen/p/6392251.html)

```
1. 安装chromedriver
sudo npm install chromedriver

java版本与selenium支持版本对应

J2SE 8 = 52, J2SE 7 = 51, J2SE 6.0 = 50, J2SE 5.0 = 49, JDK 1.4 = 48, JDK 1.3 = 47, JDK 1.2 = 46, JDK 1.1 = 45

这里报错的是52版本  java版本需要切换成java8的版本

```

**d. 出错信息： Path must be a string. Received null**
```
> imitate_netease_cloud@1.0.0 unit /Users/defaultuser/kid/imitate_netease_cloud
> cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run

08 03 2017 17:03:15.675:ERROR [plugin]: Error during loading "/Users/defaultuser/kid/imitate_netease_cloud/node_modules/karma-phantomjs-launcher" plugin:
  Path must be a string. Received null
Hash: 42c9471806d19b9e4455
Version: webpack 2.2.1
```

解决方案：
[参考](https://github.com/karma-runner/karma-phantomjs-launcher/issues/120)
```
1. 安装 phantomjs-prebuilt
sudo npm install  phantomjs-prebuilt --save
```


03-08
1. 如何引入css文件
2. vue 如何引入jquery

## 资料
