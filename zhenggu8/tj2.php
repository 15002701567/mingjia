<?php


/*
$callback = isset($_GET['callback']) ? trim($_GET['callback']) : ''; //jsonp回调参数，必需
$date = array("name"=>$_GET['name'], "mobil"=>$_GET['mobol']);
$date["msg"]="err";
$date["info"]="因系统问题，发送失败";
$tmp= json_encode($date); //json 数据
echo $callback . '(' . $tmp .')';  //返回格式，必需
*/

  
header('Content-type: application/json');
date_default_timezone_set('PRC');



require '../../data/common.inc.php';


$conn = mysqli_connect($cfg_dbhost,$cfg_dbuser,$cfg_dbpwd,$cfg_dbname) or die("连接数据库服务器失败！".mysqli_error());
mysqli_query($conn,"set names utf8");
$ip=$_SERVER["REMOTE_ADDR"];
$time= @date('Y-m-d H:i:s',time());

$name=$_GET['name'];
$mobil=$_GET['mobil'];
$age=$_GET['age'];
$sex=$_GET['sex'];
$qu=$_GET['qu'];
$add=$_GET['add'];
$t=$_GET['t'];


$data="'".$name."','".$age."','".$sex."','".$qu."','".$add."','".$mobil."','". $ip."','". $time."','".$t."'";



$sql="INSERT INTO `dede_diyform1` (`name`,`age`,`sex`,`qu`,`add`, `tellphone`, `ip`,`time`, `t`) VALUES (".$data.")";

$result = mysqli_query($conn,$sql);


$data = array(
  'msg' => 'Success'
);
echo $_GET['callback'].'('.json_encode($data).')';


 
?>