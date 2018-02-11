var articleTitleHeight = $('.article-title').height();
var articleAuthorImageHeight = $('.article-author-image').height() * 1.5;

var scrollTotal = articleTitleHeight + articleAuthorImageHeight;

setTimeout(scrollTitleUp, 500);

function scrollTitleUp() {
$("html, body").animate({ scrollTop: scrollTotal }, 1000);
}

$('.hamburger').click(function(){
    $('.nav').toggle();
})