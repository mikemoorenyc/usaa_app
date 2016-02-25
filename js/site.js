/*
templates = {};

var handlebarsHTML = '<div>'+$('#handlebars-templates').html()+'</div>';
handlebarsHTML = $.parseHTML(handlebarsHTML);

$(handlebarsHTML).find('> div').each(function(){
  var id = $(this).attr('id');
  id = id.replace("template", "");
  var html = $(this).html();
  templates[id] = Handlebars.compile(html);

});
*/

function mapLoadedCheck() {
  if(globals.loaded == 2) {
    //hubChecker();
    stateCreator(globals.properties);
  }
}
function siteInit() {

  //COMPILE TEMPLATES



  //console.log($('#handlebars-templates').html());



  //GLOBALS
  UsaaApp.ww = $(window).width();
  UsaaApp.wh = $(window).height();
  UsaaApp.scaffoldSizer = function() {
    function calc(wh) {
      var hh = $('header').height();
      var nh = $('nav').height();
      $('#map').height(wh - (hh+ nh));
    }
    calc(this.wh);


    $(window).resize(function(){
      calc(this.wh);
    }.bind(this));
  }
  UsaaApp.orientation = function(){
    function decider(w,x) {
      if (w >= x) {
      $('html').addClass('_orientation-landscape').removeClass('_orientation-portrait');
      }else {
       $('html').removeClass('_orientation-landscape').addClass('_orientation-portrait');
      }
    }
    decider(this.ww,this.wh);

    $(window).resize(function(){
      this.ww = $(window).width();
      this.wh = $(window).height();
      decider(this.ww,this.wh);
    }.bind(this));
  }
  UsaaApp.orientation();
  UsaaApp.scaffoldSizer();


/*
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




*/



  pageLoader();

  $('html').addClass('_page-loaded');
  console.log('scripts loaded');
}


/*
function scaffoldSizer() {
  var hh = $('header').height();
  var nh = $('nav').height();
  $('#map').height(globals.wh - (hh+ nh));

}
*/






//DON'T TOUCH
siteScriptsLoaded = true;
$(document).ready(function(){
  siteInit();
});
