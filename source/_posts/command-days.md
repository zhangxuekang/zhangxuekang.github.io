---
title: 每天一个命令行
date: 2100-01-01 00:00:00
categories:
  - common
tags:
  - 命令
  - 终端
header_image: https://source.unsplash.com/random
---
### 2019-04-08
```shell
npm list [-g] --depth 0
```  
查看[全局]安装的npm包，depth 0表示查看最外层的包，depth 1展开一层看看这些模块各自又依赖了哪些模块，以此类推。

### 2019-04-09
```shell
git branch -d <branch-name>
```  
删除本地分支  
```shell
git branch -b <branch-name>
```  
新建本地分支  

### 2019-04-10
```shell
echo "xxx" > file-name.txt
```  
将内容"xxx"写入file-name.txt文件中，覆盖写入。  
```shell
echo "xxx" >> file-name.txt
```  
将内容"xxx"写入file-name.txt文件中，追加写入，echo自动加换行。  

### 2019-04-11 
```shell
git checkout <origin-branch-name>
```  
基于远端分支在本地新建同名分支。  

### 2019-04-12
```shell
git rm -r --cached .
```  
将所有文件从版本库里移除，-r表示递归，深入文件内部。  
之后再运行`git add .`和`git commit`后，新的.gitignore规则就会生效。  

### 2019-04-13
```shell
history
```  
显示终端中运行过的命令。  

### 2019-04-15  
```shell
touch file-name
```  
touch命令用于修改文件或者目录的时间属性，包括存取时间和更改时间，若文件不存在，系统会建立一个新的文件。  
也就是说该命令将文件的最后更改时间设置为系统当前时间。  

### 2019-04-21  
```shell
kill -9 PID
```  
结束指定PID的进程，mac可以打开活动监视器查看进程PID。  

### 2019-04-23  
```shell
git merge --squash another
```  
将another分支上的多个commit合并成一个，放在当前分支上，原来的commit历史则没有拿过来，需要填写一个commite记录。  
### 2019-05-15  
```shell
ls -l
```  
列出文件夹内的文件信息。 

### 2019-05-19  
```shell
pwd
```  
显示当前目录路径。 

### 2019-05-23  
```shell
git tag <tagname> [commit id]
```  
创建一个标签，默认为HEAD，可以指定一个commit id。   
```shell
git tag -a <tagname> -m "blablabla..."
```  
创建一个带有信息的标签。  

### 2019-05-27  
```shell
git tag -d <tagname>
```  
在本地删除一个标签。
```shell
git push origin :refs/tags/<tagname>
```  
这样可以删除远程的标签（需要先在本地删除再删远程）。

### 2019-05-28
```shell
lsof -i tcp:<端口号>
```  
查询端口号的占用情况，会显示出PID，方便kill。  

### 2019-06-17
```shell
git push origin <xx> -f
```  
reset --hard版本回退后，只是本地回退。push的时候加-f参数，将远端代码也进行回退。不加参数push不了。   

### 2019-07-08
```shell
git checkout origin/<xx> -b <xx>
```  
基于远程的xx分支新建本地分支xx。






