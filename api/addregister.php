<?php 
  //$json = file_get_contents('php://input'); 
 
  $params = json_decode($json); 
  
  require("dbmysql.php"); 

  //$conexion = new dbmysql; 
  
  
  mysqli_query($conexion, "INSERT INTO registers(id,fakeuser_id,user_id) VALUES
                  (default,'$params->fakeuser_id','$params->user_id' )");    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL LA VISITA';

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>