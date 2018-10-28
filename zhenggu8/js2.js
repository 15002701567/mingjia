

        $(function() {
            $("img.lazy").lazyload({
				placeholder : "images/grey.gif",
                effect: "fadeIn",
            });
		 $('.shang').click(function(){$('html,body').animate({scrollTop: '400px'}, 800);});
	
				
        });
        
		function GetQueryString(name)
					{
						 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
						 var r = window.location.search.substr(1).match(reg);
						 if(r!=null)return  unescape(r[2]); return null;
					}	
		
		
window.msgalert1 = (function () {
    var $aol = $('<div id="alertOveryLayer" style="position: fixed; left: 0px; top: 0px; z-index: 99;zoom:1;text-align: center;  bottom: 0px; right: 0px; background-color: rgba(0, 0, 0, 0.298039);"><div style="  position: absolute;z-index: 999; display: -moz-box;  display: -webkit-box;  display: -webkit-flex;  display: -moz-flex;  display: -ms-flexbox;  display: -ms-flex;  display: flex;top: 30%;width: 100%;"><div class="alert-lay" style="vertical-align: middle;padding: 0 10%;-webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;  display: block;  -webkit-box-flex: 1;  -moz-box-flex: 1;  -webkit-flex: 1 1 0;  -moz-flex: 1 1 0;  -ms-flex: 1 1 0;  flex: 1 1 0;  text-align: center;margin: 0 auto; min-width: 320px; max-width: 640px;"><div class="overlay-bd" style="background-color: #fff;font-size: 14px;color: #333333;line-height: 24px;padding: 20px 15px;text-align: center;border-radius:7px 7px 0 0;">asdf</div><div class="overlay-foot" style="border-top: 1px solid #e3e3e3;"><div class="overlay-btn overlay-btn-ok" style="background-color: #fff;cursor: pointer;font-size: 16px;color: #00a1ff;height: 42px;line-height: 42px;border-radius: 0 0 7px 7px;">好的</div></div></div></div></div>');
    var cb = null;
    var sid;
    $aol.appendTo(top.document.body);
    $aol.hide();
    $aol.find(".overlay-btn-ok").click(function () {
        $aol.hide();
        typeof cb == 'function' && cb();
        cb = null;
        clearInterval(sid);
    });
    return function (msg, cbk) {
        $aol.find(".overlay-bd").html(msg);
        $aol.show();
        cb = cbk;
        sid = setInterval(function () {
            // document.body.scrollIntoView();
        }, 50);
    };
})();
		
		
		$(function (){
    // 招标来源提交
			
			 var t=GetQueryString("t");
				$("#t").val(t);
					 
			var jishu =1;

    $("#zht-form-btn").on("click",function(){
        var name = $("input[name='name']").val();
        var mobile = $("input[name='mobil']").val();
        
        var telRegexp = /^(1[3|4|5|7|8])[\d]{9}$/;
        if (!jishu) {
            msgalert1('请不要重复提交！');
            return;
        }
		
        if (!name) {
            msgalert1('请输入称呼');
            return;
        }
        if (!mobile) {
            msgalert1('请输入手机号码');
            return;
        }
        if (!telRegexp.test(mobile)) {
            msgalert1('请输入正确手机号码');
            return;
        }

      
        var j = $("form").serializeArray();//序列化name/value
        $.ajax({
            type: 'GET',  //这里用GET
            url: 'http://www.mingjialaopu.com/g/zhenggu8/tj2.php',
            dataType: 'jsonp',  //类型
            data: j,
            jsonp: 'callback', //jsonp回调参数，必需
            async: false,
            success: function(data) {//返回的json数据
				if(data.msg="Success"){
					jishu =0;
					msgalert1('提交成功');
					
				}else{
					msgalert1('系统错误');
					
				}
				
                console.log(data); //回调输出           
            },
            timeout: 3000
        })
    

    })
    
})	





