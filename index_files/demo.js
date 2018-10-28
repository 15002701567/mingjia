$(function(){

	function scollDown(id,time){
		 var liHeight=$("#"+id+" ul li:last").height();
          var time=time||2500;
          setInterval(function(){
			   var liHeight=$("#"+id+" ul li:last").height();
          $("#"+id+" ul").prepend($("#"+id+" ul li:last").css("height","0px").animate({
         	height:liHeight+"px"
          },"slow"));
          },time);
	}

	scollDown("pingjia",3000);
	scollDown("fahuo",3000);

});