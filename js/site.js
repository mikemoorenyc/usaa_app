templates = {};

var handlebarsHTML = '<div>'+$('#handlebars-templates').html()+'</div>';
handlebarsHTML = $.parseHTML(handlebarsHTML);

$(handlebarsHTML).find('> div').each(function(){
  var id = $(this).attr('id');
  id = id.replace("template", "");
  var html = $(this).html();
  templates[id] = Handlebars.compile(html);

});
function siteInit() {

  //COMPILE TEMPLATES


  //console.log($('#handlebars-templates').html());



  //GLOBALS
  globals.ts = 250,
  globals.tab = 401,
  globals.dt = 801;


  globals.ww = $(window).width();
  globals.wh = $(window).height();
  orientationClass();
  scaffoldSizer();
  $(window).resize(function(){
    globals.ww = $(window).width();
    globals.wh = $(window).height();
    orientationClass();
    scaffoldSizer();
  });

  // INITIALIZE THE MAIN MAP
  mainMapMaker();








  pageLoader();

  $('html').addClass('_page-loaded');
  console.log('scripts loaded');
}



function scaffoldSizer() {
  var hh = $('header').height();
  var nh = $('nav').height();
  $('#map').height(globals.wh - (hh+ nh));

}


function orientationClass() {
  if (globals.ww >= globals.wh) {
    $('html').addClass('_orientation-landscape').removeClass('_orientation-portrait');
  } else {
    $('html').removeClass('_orientation-landscape').addClass('_orientation-portrait');
  }
}



//DON'T TOUCH
siteScriptsLoaded = true;
$(document).ready(function(){
  siteInit();
});
