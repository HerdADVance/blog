/* GLOBALS */
var windowHeight;

/* FUNCTIONS TO BE RAN ONCE EVERY TIME PAGE IS LOADED */
$(document).ready(function() {
	getWindowHeight();
});

/* FUNCTIONS TO BE RAN EVERY TIME USER RESIZES BROWSER WINDOW */
$(window).resize(function(){
	getWindowHeight();
});

/* FUNCTIONS TO BE RAN EVERY TIME USER SCROLLS */
$(window).scroll(function() {
	fixedNavOrNah();
});


// FUNCTIONS

function fixedNavOrNah(){
	//var fromTop = $(window).scrollTop();
	console.log("FROM TOP " + fromTop)
	console.log("WINDOW HEIGHT " + windowHeight)
	if(fromTop >= windowHeight) $('.header').addClass('sticky');
		else $('.header').removeClass('sticky');
}

function getWindowHeight(){
	windowHeight = $(window).height();
}

