---
title: 使用draft.js构建富文本编辑器  
date: 2019-03-30 15:46:25  
categories:
  - react
tags:
  - 富文本
  - draft.js
  - react
---
[Draft.js](https://draftjs.org/)是一个构建富文本编辑器的React框架.  
Draft.js不是一个富文本编辑器的组件库, 他提供构建编辑器的工具, 如何实现, 需要开发者自己去设计. 砖头水泥都有了, 就差个程序员去盖房子了.  
## 特点  
* 大部分富文本编辑器保存的数据都是html, 数据不够结构化, 查询修改数据很不容易. 而Draft.js提供结构化的数据, 表现能力更大强大.  
* 实现富文本功能的过程中你会发现, Draft.js没有直接在操作dom. 数据和渲染的完全分离, 使开发者只需要关注数据层.  
* 在Draft.js中, 所有的事情都是开发者自己去定制的, 灵活性高, 可扩展性强.  
* 不管是多样的行内样式还是复杂块级样式, 使用Draft.js都可以方便配置.  
## 开始使用
### 安装  
Draft.js依赖于React和React DOM, 确保项目中安装了这两项
```bash
npm install --save draft-js react react-dom
# 或者
yarn add draft-js react react-dom
```
### 使用  
官网上提供的基础代码
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('container')
);
```
如果配置正常的话, 应该能看到一个可输入区域, 离富文本还差得远呢. 因为还没有配置富文本渲染方法, 所以目前还是纯文本编辑器. Draft.css文件是默认的渲染样式, 需要在项目中引入生效.  
