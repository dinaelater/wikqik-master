jQuery(document).ready(function(){
  $('.close-menu').click(function(){
    $('.navbar-collapse').removeClass('show');
    $('.window-overlay').toggleClass('show');
  });

  $('.navbar-toggler').click(function(){
    $('.window-overlay').toggleClass('show');
  });
});