$(document).ready(function() {
  $('.sign-up-form').hide();
  $('.login-form').hide();

  $('a.btn-sign-up').on('click', function(e) {
    if ($('.sign-up-form').is(':hidden')) {
      $('.sign-up-form').slideDown('slow');
      $('.landing-section-2').height( 800 );
    } else {
      $('.sign-up-form').hide();
      $('.landing-section-2').height( 500 );
    }
    e.preventDefault();
  });

  $('div.col-lg-12 p').on('click', function(e) {
    if ($('.login-form').is(':hidden')) {
      $('.login-form').slideDown('slow');
      $('.landing-section-2').height( 700 );
    } else {
      $('.login-form').hide();
      $('.landing-section-2').height( 500 );
    }
    e.preventDefault();
  });
});
