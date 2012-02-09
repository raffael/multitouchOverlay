var script=document.createElement('script');
script.src='https://raw.github.com/raffael-me/MultitouchOverlay/master/multitouchOverlay.js';
script.type='text/javascript';
document.head.appendChild(script);

var link=document.createElement('link');
link.href='https://raw.github.com/raffael-me/MultitouchOverlay/master/multitouchOverlay.css';
link.type='text/css';
link.rel='stylesheet';
document.head.appendChild(link);

setTimeout(function(){
	var app = document.getElementById('multitouchReceptor');
	if (!app) {
		var app = document.createElement('div');
		app.setAttribute('id', 'multitouchReceptor');
		document.getElementsByTagName('body')[0].appendChild(app);
	}
}, 500);