history.pushState(null, null, "#list");
$(window).bind("hashchange", function(){
  if (is_postmodal_open == 1){
  	postmodal_close();
  	history.pushState(null, null, "#list");
  	history.replaceState(null, null, "#list");
  }
  else {
  	history.go(-1);
  }
});