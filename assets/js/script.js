$(document).ready(function() {
    //callFullpage();

    var articleTitleHeight = $('.article-title').height() + 35;

    setTimeout(scrollTitleUp(articleTitleHeight), 750);

    function scrollTitleUp(height) {
        $("html, body").animate({ scrollTop: height }, 1000);
    }

});

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