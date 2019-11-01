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


// FADES IN HOME FEATURE
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".home-articles h1").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(250,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(250,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
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

