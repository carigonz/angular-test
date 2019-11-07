<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("dbmysql.php"); 
  $conexion = new DbMysql;

  $fakeData = mysqli_query($conexion, "SELECT * FROM fakeusers");
  
  while ($resultado = mysqli_fetch_array($fakeData))  
  {
    $datos[] = $resultado;
  }
  
  $json = json_encode($datos); 

  echo $json; 
  
  header('Content-Type: application/json');
?>