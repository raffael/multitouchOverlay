var script=document.createElement('script');
script.src='https://raw.github.com/raffael-me/MultitouchOverlay/master/multitouchOverlay.js';
script.type='text/javascript';
document.head.appendChild(script);

var link=document.createElement('style');
link.innerHTML = "@import url('https://raw.github.com/raffael-me/MultitouchOverlay/master/multitouchOverlay.css');";
document.head.appendChild(link);

setTimeout(function(){
	var app = document.getElementById('multitouchReceptor');
	if (!app) {
		var app = document.createElement('div');
		app.setAttribute('id', 'multitouchReceptor');
		document.getElementsByTagName('body')[0].appendChild(app);
	}
}, 500);