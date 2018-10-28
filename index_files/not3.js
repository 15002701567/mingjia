
//window.onerror = function(){return true;}
//function $(id){return document.getElementById(id);}  
//function getHeight(){$("fahuo").style.height=$("forml").offsetHeight-85+"px";}  
//window.onload = function(){getHeight();}  
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
try{	
new PCAS("province","city","area");
}
catch(ex){
} 	
try{	
	var thissrc = document.getElementById("yzm").src;
	function refreshCode(){
		document.getElementById("yzm").src=thissrc+"?"+Math.random(); 
	}
}
catch(ex){
} 	
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
function pricea(){
  var not3others = document.form.pro1.alt;
	for(var i=0;i<document.form.pro1.length;i++){
		if(document.form.pro1[i].checked==true){
			var not3others = document.form.pro1[i].alt;
			break;
		}
	}
	var not3other=not3others.split("###");
	var product = not3other[0];

  if(document.form.mun.value=="" || document.form.mun.value==0){	
		var mun=1;
	}
	else{
		var mun=document.form.mun.value;
	}	
	var price=product*mun;
    // document.getElementById("b1").checked='checked';
	document.form.price.value=price;
	document.form.zfbprice.value=price;
	document.form.zfbewm.value=not3other[1];
  	document.form.wxewm.value=not3other[2];
	//document.getElementById("showprice").innerHTML=price;
	document.getElementById("zfbyh").innerHTML=''; 
}
function priceb(){
    var cpxljg = document.getElementById("product");
    var product = cpxljg.options[document.getElementById("product").options.selectedIndex].title; 
    if(document.form.mun.value=="" || document.form.mun.value==0){	
		var mun=1;
	}
	else{
		var mun=document.form.mun.value;
	}	
	var price=product*mun;
	document.getElementById("b1").checked='checked';
	document.form.price.value=price;
	document.form.zfbprice.value=price;
	//document.getElementById("showprice").innerHTML=price;
	document.getElementById("zfbyh").innerHTML='';
}

//***************************  支付宝价格  ***************************
function zfbprize(){
         sprice=document.form.zfbprice.value;
		// alert(sprice);
         document.form.price.value=(sprice*notzfbzk*0.1).toFixed(0)
}
function LG_checkn()
{
	if($("input[name=pay]:checked").val()=="zfbk" || $("input[name=pay]:checked").val()=="wx")
	{
		
		if($("#mun").val()>1)
		{
			
			alert("此付款方式只能购买数量1件");
			$("#mun").val(1);
			pricea();
			
		}
		
	}
	
}
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
function changeItem(i){
LG_checkn();
if (i==1) {
//document.getElementById("paydiv1").style.display = "block";
//document.getElementById("paydiv0").style.display = "none";
  if (notzfbzk != 0){
     zfbprize();
     document.getElementById("zfbyh").innerHTML='<font color=red><b><s>&nbsp;原价：'+document.form.zfbprice.value+'元&nbsp;</s>&nbsp;'+notzfbzk+'折</b></font>';
  }
}else{
//oprize1();
//document.getElementById("paydiv0").style.display = "block";
//document.getElementById("paydiv1").style.display = "none";
document.getElementById("zfbyh").innerHTML='';
document.form.price.value=document.form.zfbprice.value;
}
}

function addnumber(){
	$('#mun').val(parseInt($('#mun').val())+1);
	pricea();
	LG_checkn();
}

function minnumber(){
	if($('#mun').val()>1){
	$('#mun').val(parseInt($('#mun').val())-1);
	pricea();
	}
}
function inputnumber(){
	var number=parseInt($('#mun').val());
	if(isNaN(number)||number<1){
		$('#mun').val('1');
	    pricea();
	}else{
		$('#mun').val(number);
        pricea();
	}
}
try{	
	var thissrc = document.getElementById("yzm").src;
	function refreshCode(){
		document.getElementById("yzm").src=thissrc+"?"+Math.random(); 
	}
}
catch(ex){
} 	
function addproduct()
{
	p="";
	z="";
	 $(".not3chanpin0 label").each(function(){
		 
		 if($(this).hasClass("now"))
		 {
			 
			p+= $(this).text();
		 }
		 
	 })
	  $(".not3chanpin1 label").each(function(){
		 
		 if($(this).hasClass("now"))
		 {
			 
			p+= $(this).text();
		 }
		 
	 })
	  $(".not3chanpin2 label").each(function(){
		 
		 if($(this).hasClass("now"))
		 {
			 
			p+= $(this).text();
		 }
		 
	 })
	  $(".not3chanpin3 label").each(function(){
		 
		 if($(this).hasClass("now"))
		 {
			 
			p+= $(this).text();
		 }
		 
	 })
	 
	 
	   $(".zengsong1 label").each(function(){
		 
		 if($(this).hasClass("now"))
		 {
			 
			z+= $(this).text();
		 }
		 
	 })
	 
	    $(".zengsong2 label").each(function(){
		 
		 if($(this).hasClass("now"))
		 {
			 
			z+= $(this).text();
		 }
		 
	 })
	 
	    $(".zengsong3 label").each(function(){
		 
		 if($(this).hasClass("now"))
		 {
			 
			z+= $(this).text();
		 }
		 
	 })
	 
	// if(z!="") z="<font color='red'>(赠品:"+z+')</font>';
	//alert(p+z);
	$("#productall").val(p);
	$("#productzpall").val(z);
	
}

$(document).ready(function(){ 

	 $(".not3chanpin0 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				 $(".not3chanpin0 label").removeClass("now");
				o.addClass("now");
			}
			addproduct();
		});
})
$(document).ready(function(){ 
	 $(".not3chanpin1 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".not3chanpin1 label").removeClass("now");
				o.addClass("now");
			}
			addproduct();
		});
})
$(document).ready(function(){ 
	 $(".not3chanpin2 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".not3chanpin2 label").removeClass("now");
				o.addClass("now");
			}
			addproduct();
		});
})
$(document).ready(function(){ 
	 $(".not3chanpin3 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".not3chanpin3 label").removeClass("now");
				o.addClass("now");
			}
			addproduct();
		});
})
$(document).ready(function(){ 
	 $(".zengsong1 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".zengsong1 label").removeClass("now");
				o.addClass("now");
			}
			addproduct();
		});
})
$(document).ready(function(){ 
	 $(".zengsong2 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".zengsong2 label").removeClass("now");
				o.addClass("now");
			}
			addproduct();
		});
})
$(document).ready(function(){ 
	 $(".zengsong3 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".zengsong3 label").removeClass("now");
				o.addClass("now");
			}
			addproduct();
		});
})
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
var llref = '';
if (document.referrer.length > 0){
	llref = document.referrer;
}
try{
	if (llref.length == 0 && opener.location.href.length > 0){
    llref = opener.location.href;
	}
}
catch (e){}

/*///////////////////////////////////////// ORDERJSEND /////////////////////////////////////////*/