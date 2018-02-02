//$(document).ready(function() {
    //callFullpage();

    var articleTitleHeight = $('.article-title').height() + 40;

    setTimeout(scrollTitleUp, 1000);

    function scrollTitleUp() {
        $("html, body").animate({ scrollTop: articleTitleHeight }, 500);
    }

//});

// $(document).on('click', '.arrow', function(){
//   $.fn.fullpage.moveSectionDown();
// });

// function callFullpage(){
//     $('#fullpage').fullpage({
//         afterRender: function(){
//             var numPages = $('#fullpage .page').length;
//         },
//         onLeave: function(index, nextIndex, direction){
//             var numPages = $('#fullpage .page').length;

//         },
//         loopHorizontal: true
//     });
// }