function detailCreator(clicked) {
  var id = $(clicked).data('id'),
      title = $(clicked).attr('title'),
      url = $(clicked).attr('href');
  $('html').addClass('__detail-loading');

  //GET THE CONTEXT
  $.ajax({
    url:globals.homeURL+'/property-detail-processor?id='+id,
    dataType:'json',
  })
  .done(function(data){
    console.log(data);
    detailAssembler(data);
  })
  .fail(function(){
    alert('Could Not Load Property. Please try again later.');
    $('html').addClass("__detail-loading");
  })

}

function detailAssembler(data) {
  var content = {
    home: globals.homeURL,
    title: data.title,
    content: data.content
  }
  $("#detail-container").html(templates.detail(content));
  detailRunner(data);
  $('html').removeClass("__detail-loading");
  $('#detail-container').show();
}

function detailRunner(data) {

}
