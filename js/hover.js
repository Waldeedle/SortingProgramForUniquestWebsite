var sTimer = null;

$(window).scroll(function() {
    var top = $(window).scrollTop();
    clearTimeout(sTimer);
    sTimer = setTimeout(
        function() 
        {
            console.log(top);
            if(top > 191)
            {
                $('#intro_header', '#sorting').fadeIn();
            }
            else
            {
                $('#intro_header','#sorting').fadeOut();
            }
        }, 50);
});

