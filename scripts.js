$("document").ready(function(){
  const over21 = confirm("Are you over 21 years old?");
  if(over21){
    $("#drinks").show();
  }else{
    $("#under-21").show();
  }
});
