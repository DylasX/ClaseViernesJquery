var counter = 4;

$(".crop-img").click(function(){
  var src= $(this).attr('src');
  $('#bigImage').delay(400).fadeOut(500,function(){

    $("#bigImage").attr('src',src).fadeIn(500);


  });
});

$("#backward").click(function(){
  counter = counter -1;

  if (counter<1) {

    counter=4;

  }

  $("#image"+counter).click();
});

$("#forward").click(function(){
  counter= counter +1;


  if (counter>4 ) {

    counter=1;

  }


  $("#image"+counter).click();

});

setInterval(function(){
  $("#forward").click();
},2000);
