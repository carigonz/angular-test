<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

class DbMysql 
{
	protected $conection;
	function __construct()
	{
		$config=file_get_contents("config.json");
		$configArr= json_decode($config,true);
		$dbName= $configArr["dbName"];
		$dbPort= $configArr["dbPort"];
		$dbPass= $configArr["dbPass"];
		
	$dsn = "mysql:host=localhost;dbname=$dbName;port=$dbPort";
	$user = "root";
	$pass = $dbPass;
	try {
		$this->conection = new PDO ($dsn, $user, $pass);
		//para que db muestre los errores en php
		$this->conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch (\Exception $e) {
		echo "hubo un error <br>";
		echo $e-getMessage();
		exit;
		}
	}
    
    
}
header('Content-Type: application/json');