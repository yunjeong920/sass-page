$(function(){
  $("ul.tabs li").click(function(){
    var tab_id = $(this).attr("data-tab");
    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");
    $(this).addClass("current");
    $("#"+tab_id).addClass("current");
  })
})

$(function(){
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll  > 1){
      $("#header").css({"background":"rgba(255,255,255,0.9)"},{"transition":"0.3s"});
    }
    else{
      $("#header").css({"background":"none"},{"transition":"0.3s"});
    }
  })
})
