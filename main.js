
$(window).on('load', function(e){
  $('#appeal').delay(900).fadeIn(900);

});

$(window).on('scroll', function(e){
  e.preventDefault();
topHeight = $(this).scrollTop();
console.log(topHeight);
if (topHeight > 2) {
    $('#menu').addClass('shad');
  }else if (topHeight < 2) {
    $('#menu').removeClass('shad');
  }
});

$('#mm').on('click', function(e){
  e.preventDefault();
  $('#mob-menu').toggle();
})

$('.mob-menu-item').on('click', function(e){
  e.preventDefault();
  $('#mob-menu').hide();
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
         // $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            //$target.focus(); // Set focus again
          };
        });
      }
    }
  });