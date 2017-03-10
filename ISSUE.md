# vue-仿网易云 -问题集


---
[toc]
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

npm nodejs版本过低
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





