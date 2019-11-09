<?php 
  require("dbmysql.php"); 

  //$conexion = new DbMysql; 

  $registers = mysqli_query($conexion, "SELECT * FROM registers");
  
  // array transform ?
  while ($resultado = mysqli_fetch_array($registers))  
  {
    $data[] = $result;
  }
  
  $json = json_encode($data);
  
  echo $json;
  
?>