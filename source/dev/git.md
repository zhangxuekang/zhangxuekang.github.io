基础
---
* git log  //  显示从最近到最远的提交日志
* git reflog // 记录每一次命令
* git diff HEAD // 命令可以查看工作区和版本库里面最新版本的区别
* git checkout . // 回到最近一次git commit或git add时的状态
* git reset HEAD // 把暂存区的修改回退到工作区
* git reset --hard 1094a // 回到某个版本

现有本地库, 关联远端库
---
* git remote add origin git@server-name:path/repo-name.git // 关联远端库.
关联后，使用命令git push -u origin master第一次推送master分支的所有内容 // -u 本地的master分支和远程的master分支关联起来

现有远端库
---
* git clone // 克隆

分支
---
* git checkout -b 分支名 // 新建分支,并切换
* git branch // 查看本地分支
* git checkout 分支名 // 切换分支
* (分支1) git merge 分支2 // 代表将分支2合并到分支1中
* git branch -d 分支名 // 删除分支
* git stash // 当前工作现场储藏起来，等以后恢复现场后继续工作
* git stash list // 查看储存的工作现场
* git stash pop // 回复现场
* git push origin 本地分支1.0 // 将本地分支1.0推送到远端对应的分支上
* git branch --set-upstream 本地分支名 origin/远端分支名 // 将本地分支与远端分支关联起来

版本,标签
---
* git tag v1.0.0 // 当前分支当前提交,打标签,默认标签是打在最新提交的commit上的
* git tag v0.9 f52c633 // 给分支的 f52c633 打上v0.9标签
* git tag -a <tagname> -m "blablabla..." // 可以指定标签信息
* git tag -d v0.1 // 删除标签
* git push origin --tags // 推送标签到远端