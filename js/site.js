function siteInit() {

  //COMPILE TEMPLATES
  $('#handlebars-templates > div').each(function(){
    var id = $(this).attr('id');
    var html = $(this).html();
    window[id] = Handlebars.compile(html);
  });



  //GLOBALS
  ts = 250,
  tab = 401,
  dt = 801;
  windoww = $(window).width();
  windowh = $(window).height();
  orientationClass();
  $(window).resize(function(){
    windoww = $(window).width();
    windowh = $(window).height();
    orientationClass();
  });

  //theHistory();


  //CHECK IF CSS IS LOADED
  /*
  var thechecker = setInterval(function(){
    var ztest = $('#css-checker').css('height');

    if(ztest == '1px') {
      cssLoaded = true;
      clearInterval(thechecker);
      console.log('css loaded');
    }
  }, 10);
  */






  pageLoader();

  $('html').addClass('_page-loaded');
  console.log('scripts loaded');
}






function orientationClass() {
  if (windoww >= windowh) {
    $('html').addClass('_orientation-landscape').removeClass('_orientation-portrait');
  } else {
    $('html').removeClass('_orientation-landscape').addClass('_orientation-portrait');
  }
}



//DON'T TOUCH
siteScriptsLoaded = true;
siteInit();
