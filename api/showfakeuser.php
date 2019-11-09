
<?php
/**
 * Returns the list of cars.
 */
require 'dbmysql.php';
    
$names = [];
$sql = "SELECT * FROM fakeusers WHERE dni=$_GET[dni]";

if($result = mysqli_query($conexion,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $user[$cr]['id']    = $row['id'];
    $user[$cr]['name'] = $row['name'];
    $cr++;
  }
    
  echo json_encode(['data'=>$user]);
}
else
{
  http_response_code(404);
}