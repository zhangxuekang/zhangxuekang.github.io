(function() {
  const text = '这是你的战争这不是我的战争这是谁的战争这是你的战争这不是我的战争这是谁的战争这是你的战争这不是我的战争这是谁的战争这是你的战争这不是我的战争这是谁的战争'
  const $body = document.querySelector('body')
  text.split('').forEach((char, index) => {
    const $span = document.createElement('span')
    $span.setAttribute('class', 's')
    $span.setAttribute('id', 's-' + index)
    $span.setAttribute('data-up', '1')
    $span.textContent = char
    $body.appendChild($span)
  })
  const $spans = document.querySelectorAll('.s')
  window.addEventListener('mousemove', (e) => {
    const x = parseFloat(e.clientX)
    const y = parseFloat(e.clientY)
    $spans.forEach(($span) => {
      const cls = $span.getAttribute('id') || ''
      const reg = /s-(\d+)/.exec(cls)
      if (reg) {
        const num = parseFloat(reg[1])
        setTimeout(() => {
          $span.style.display = "block";
          $span.style.top = y + "px";
          $span.style.left = x + (num + 1) * 20 + "px"
        }, (num + 1) * 50)
      }
    })
  })
})()