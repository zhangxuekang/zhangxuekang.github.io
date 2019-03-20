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
### 基础使用  
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
如果配置正常的话, 应该能看到一个可输入区域, 简单看下是怎么实现的. 使用过React的input表单控件的开发知道: 
> 其值由 React 控制的输入表单元素称为“受控组件”。  

Draft.js构建的富文本编辑器也是一个"受控组件", 使用方法和input控件一样, 指定数据源(this.state.editorState), 添加控制函数(this.onChange). onChange方法触发后, Draft.js会将最新的editorState作为参数传出来, 用新数据渲染, 实现同步更新.  
因为还没有配置富文本渲染方法, 所以目前还是纯文本编辑器. Draft.css文件是默认的渲染样式, 需要在项目中引入生效.  
## 富文本样式  
### 快捷键
RichUtils模块拥有很多操作富文本的方法, 现在我们使用RichUtils.handleKeyCommand来实现快捷键修改文本样式的功能.  
```js
class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
      />
    );
  }
}
```
handleKeyCommand是控制键盘快捷键的接口,  
Draft.js默认的快捷键有Cmd+B(加粗), Cmd+I(斜体)等, 当前, 你也可以自己定义快捷键.  
```js
import {Editor, getDefaultKeyBinding, KeyBindingUtil} from 'draft-js';
const {hasCommandModifier} = KeyBindingUtil;
class MyEditor extends React.Component {
  // ...
  handleKeyCommand(command: string): DraftHandleValue {
    if (command === 'myeditor-save') {
      // 必须返回'handled', 告诉Draft.js采用修改,设置新的editorState
      return 'handled';
    }
    return 'not-handled';
  }
  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        keyBindingFn={myKeyBindingFn}
        ...
      />
    );
  }
}

function myKeyBindingFn(e: SyntheticKeyboardEvent): string {
  if (e.keyCode === 83 && hasCommandModifier(e)) {
    return 'myeditor-save';
  }
  return getDefaultKeyBinding(e);
}
```
### 按钮  
在开发富文本编辑器中, 最常用的还是样式按钮. 看Draft.js如何监听一次点击事件设置样式.
```js
class MyEditor extends React.Component {
  // …
  handleBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleBoldClick.bind(this)}>Bold</button>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
```
RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')将当前选择的文字设置为加粗样式, 返回修改后的editorState, 'BOLD'是Draft.js设置好的样式名称, 其他的还有'ITALIC', 'UNDERLINE', 和 'CODE'. 这些样式名称可以直接使用. 要想获得丰富的富文本样式, 肯定要自己定义一套样式规则.
```js
import {Editor} from 'draft-js';
/**
 * styleMap用来定义渲染规则 
 * key值是样式的名称, 在RichUtils.toggleInlineStyle(EditorState, key)中使用
 * value是渲染的css规则, 其中用驼峰格式来标识样式属性
 **/
const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through',
  },
};
class MyEditor extends React.Component {
  // ...
  handleLineThrough() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLineThrough.bind(this)}>删除线</button>
        <Editor
          customStyleMap={styleMap} // 必须在这里指定自定义的样式规则
          editorState={this.state.editorState}
          ...
        />
      </div>
    );
  }
}
```
现在, 行内样式已经搞定了. 在实际开发中, 最好将行内样式定义放在一个单独的文件中, 在要使用的地方用import导入进来, 更近一步可以将执行修改的逻辑也放在控制层, 组件只负责渲染.  

