$('#core-toggles li a').click(function(e){
  e.preventDefault();
  $(this).parent().toggleClass('active');
  stateCreator();
});
$('#type-toggles li a').click(function(e){
  e.preventDefault();
  $('#type-toggles li').removeClass('active');
  $(this).parent().addClass('active');
  stateCreator();
})
