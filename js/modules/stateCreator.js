function stateCreator(data) {

  var coreArray = [];
  globals.stateSet = {};

  $(globals.properties).each(function(index,e){
    var p = this;

      p.toggled =  false;
      p.inhub =  false;
  })



  $('#core-toggles li').each(function(){
    if($(this).hasClass('active') == true) {
      var type = $(this).data('type');
      coreArray.push(type);
    }
  });
  $('.mapPin').removeClass("__toggled");
  $(globals.properties).each(function(index,e){
    var p = this;
    $(coreArray).each(function(){

      if(p.core == this) {
        //$('.mapPin.pin-'+p.id).addClass("__toggled");
        //globals.stateSet['pin-'+p.id].toggled = true;
        p.toggled = true;
      }

    });
  });


  //TYPE LOOP
  var typeToggle = $('#type-toggles li.active').first().data('type');
  $(globals.properties).each(function(index,e){
    if (typeToggle == 'all') {
      return;
    }
    var p = this;
    if(p.propertyType != typeToggle) {
      //$('.mapPin.pin-'+p.id).removeClass('__toggled');
      //globals.stateSet['pin-'+p.id].toggled = false;
      p.toggled = false;
    }
  });
  hubChecker();


}
