(function($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		wide: ['1281px', '1680px'],
		normal: ['981px', '1280px'],
		narrow: ['841px', '980px'],
		narrower: ['737px', '840px'],
		mobile: ['481px', '736px'],
		mobilep: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		offsetY: -15,
		hoverDelay: 0,
		alignment: 'center'
	});

	// Nav.

	// Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'<span class="title">' + $('#logo').html() + '</span>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

	let z = 2;
	$('#banner').on('click', function(e) {
		if ($(document).scrollTop() > 5) {
			return
		}
		const mx = e.pageX;
		const my = e.pageY;
		// 获取banner位置
		const rects = document.querySelector('#banner').getBoundingClientRect();
		const { left, top } = rects;
		z = z + 1;
		_wave(mx - left, my - top, z);
		
	});

	function _wave(i, j, k) {
		$('#banner').prepend(
			'<div class="wave-position water' + k + '" style="z-index:' + k + ';top:' + j + 'px;left:' + i + 'px;">' +
			'<div class="wave-body">' +
			'<div class="wave wave5"></div>' +
			'<div class="wave wave4"></div>' +
			'<div class="wave wave3"></div>' +
			'<div class="wave wave2"></div>' +
			'<div class="wave wave1"></div>' +
			'<div class="wave wave0"></div>' +
			'</div>' +
			'</div>'
		);
		setTimeout(function() {
			$('.water' + k).remove();
		}, 2000);
	}

})(jQuery);