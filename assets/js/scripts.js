tiAnimation = () => {
  console.log('running')
  $('.header-text').typeIt({
    lifelike: true,
    autostart: true
  })
}

$(window).on("load", function() {
  $(this).scrollTop(0);
  // new TypeIt;
  tiAnimation();
  $('.card').flip({
    trigger: 'hover',
    speed: 900,
    axis: 'x'
  });
  $('.contact-card').flip({
    trigger: 'hover',
    speed: 600
  })
})