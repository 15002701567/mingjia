<?php
	 header("Content-Type: text/html; charset=UTF-8");
date_default_timezone_set('Asia/Shanghai');	 
	 $ServerName= "127.0.0.1";
	 $UserName= "root";
	 $UserPW= "root";
	 $DBname= "qcy006;
	 
	 $conn= mysqli_connect($ServerName, $UserName, $UserPW, $DBname);
	 if(!$conn){
		die("错误信息:".mysqli_connect_error());
	 }
	 $sql="select * from userinfo";
	 $result = mysqli_query($conn, $sql);
	 
    // 输出数据

 

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>用户信息</title>
	<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">  
	<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<table class="table table-hover">
	<caption>用户信息</caption>
	<thead>
		<tr>
			<th>ID</th>
		
			<th>产品数量</th>
			<th>姓名</th>
			<th>手机</th>
			<th>地址</th>
		
			<th>留言</th>

			<th>填写时间</th>
		</tr>
	</thead>
	<tbody>
	<?php 
	
	if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) { ?>
		<tr class="active">
			<td><?php  echo $row['id']; ?></td>
			<td><?php  echo $row['mun']; ?></td>
			<td><?php  echo $row['name']; ?></td>
			<td><?php  echo $row['phone']; ?></td>
			<td><?php  echo $row['address']; ?></td>
			<td><?php  echo $row['guest']; ?></td>
			
			<td><?php  echo date("Y-m-d H:i:s",$row['time']); ?></td>
		</tr>
	<?php  } }  mysqli_close($conn);  ?>
	</tbody>
</table>

</body>
</html>
