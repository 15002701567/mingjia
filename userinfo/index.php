<?php 
	 header("Content-Type: text/html; charset=UTF-8");
	 $phone= $_POST['phone'];//手机 


//判断手机号是否为11位
	if(strlen($phone) == 11 ){
			echo "<script>alert('提交完成！'); window.location.href='../index.html';</script>";
	 }else{
			echo "<script>alert('手机号码错误或该号码已注册！'); window.location.href='../index.html';</script>";
	 }