var d=document;
var smartstats_locationurl = String(d.location);
var uv_s=getCookie("LG_UV");
var uv;
var pv;
//alert(uv_s);
if(uv_s==null)
{
	setCookie("LG_UV",1);
	uv=1;
	pv=0;
}
else
{
uv=0;	
pv=1;
	
}
 
var smartstats_outstr	= '<script language=javascript src="/nottongji.asp?weburl='+smartstats_locationurl+'&pv='+pv+'&uv='+uv+'"><\/script>';
document.write(smartstats_outstr);



function setCookie(name,value) 
{ 
    var Days = 1; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 

//¶ÁÈ¡cookies 
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
} 

//É¾³ýcookies 
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
} 