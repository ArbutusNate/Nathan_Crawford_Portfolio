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
})