<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("dbmysql.php"); 
  $conexion = new DbMysql;



  $fakeData = mysqli_query($conexion, "SELECT * FROM fakeusers WHERE dni=$_GET[dni]");
  
  while ($result = mysqli_fetch_array($fakeData))  
  {
    $data[] = $result;
  }
  
  $json = json_encode($data); 

  echo $json; 
  
  header('Content-Type: application/json');
?>