(function () {
  const pagePath = {
    index: '',
    article: '../',
    app: '../',
    game: '../',
    default: '',
  }

  const args = getArgs()
  const page = args.page || 'default'
  const deep = parseInt(args.deep || '1', 10)
  let path = pagePath[page]
  for (let i = 0; i < deep - 1; i++) {
    path += '../'
  }

  const navHTML = `
    <ul>
    	<li class="${page === 'index' ? 'current' : ''}"><a href="${path}index.html">主页</a></li>
      <li class="${page === 'article' ? 'current' : ''}">
        <a href="">文章</a>
        <ul>
    			<li><a href="${path}article/mouse-svg.html">js实现将一系列点拟合成平滑曲线</a></li>
    		</ul>
      </li>
    	<li class="${page === 'app' ? 'current' : ''}">
    		<a href="#">项目</a>
    		<ul>
    			<li><a href="https://zhangxuekang.com/rich-text/index.html">富文本</a></li>
    			<li><a href="https://zhangxuekang.com/web-calendar/index.html">万年历</a></li>
    			<li><a href="https://zhangxuekang.com/mouse-svg/index.html">鼠标轨迹转svg</a></li>
    		</ul>
    	</li>
    	<li class="${page === 'game' ? 'current' : ''}">
    		<a href="#">小游戏</a>
    		<ul>
    			<li><a href="http://zhangxuekang.com/mouse-show/index.html">跟随鼠标移动的文字</a></li>
    			<li><a href="https://zhangxuekang.com/snake/index.html">贪吃蛇</a></li>
    		</ul>
    	</li>
    </ul>
  `
  document.querySelector('#nav').innerHTML = navHTML

  function getArgs() {
    const sc = document.querySelectorAll('script')
    const paramsArr = sc[sc.length - 1].src.split('?')[1].split('&')
    const args = {}
    let param
    let name
    let value
    for (let i = 0, len = paramsArr.length; i < len; i++) {
      param = paramsArr[i].split('=');
      name = param[0]
      value = param[1]
      args[name] = value
    }
  
    return args
  }
})()