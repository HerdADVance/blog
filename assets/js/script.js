$(document).ready(function() {
    callFullpage();
});

$(document).on('click', '.arrow', function(){
  $.fn.fullpage.moveSectionDown();
});

function callFullpage(){
    $('#fullpage').fullpage({
        afterRender: function(){
            var numPages = $('#fullpage .page').length;
        },
        onLeave: function(index, nextIndex, direction){
            var numPages = $('#fullpage .page').length;

        },
        loopHorizontal: true
    });
}