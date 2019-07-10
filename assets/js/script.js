// var articleTitleHeight = $('.article-title').height();
// var articleAuthorImageHeight = $('.article-author-image').height() * 1.5;

// var scrollTotal = articleTitleHeight + articleAuthorImageHeight;

// setTimeout(scrollTitleUp, 500);

// function scrollTitleUp() {
// $("html, body").animate({ scrollTop: scrollTotal }, 1000);
// }

// $('.hamburger').click(function(){
//     $('.nav').toggle();
// })

// $(document).scroll(function() {
//     var dist = $(document).scrollTop();
//     if(dist > 1000){ // Remove top-bar from header
//     	$('.nav').addClass('sticky');
//     }
//     else{ // Add top-bar to header
//     	$('.nav').removeClass('sticky');
//     }
// })

window.addEventListener("scroll", function() {
	var elementTarget = document.getElementById("header");
	if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
		$('.header').addClass('sticky');
	} else{
		$('.header').removeClass('sticky');
	}
});