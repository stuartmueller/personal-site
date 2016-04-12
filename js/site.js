$(function() {
  $('#slider').rbtSlider({
      height: '100vh',
      'dots': true,
      'arrows': true,
      'auto': 3
    });

    $('.site-nav').on('click','a', function(event){
      $('.site-nav li').removeClass('active');
      $(this).parent().addClass('active');
    });
});
