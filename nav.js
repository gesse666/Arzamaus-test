window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
				document.querySelectorAll('.nav a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});
				document.querySelectorAll('.nav li').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});
				document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
				document.querySelectorAll('.nav li')[i].classList.add('active');
			}
		});
	}
});


window.onscroll = function() {
    var body = document.body,
    html = document.documentElement;
    
var heighSite = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );
var scrolled = window.pageYOffset || document.documentElement.scrollTop;

var nowHeight = scrolled + html.clientHeight
    
    if(nowHeight == heighSite){
	document.querySelector('.nav').style="visibility:hidden;";
    }else{
		document.querySelector('.nav').style="visibility:visible;";
    }
}
