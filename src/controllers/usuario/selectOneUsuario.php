<?php
include "../models/Usuario.php";
include "../models/UsuariosMapper.php";
//controlador encargado de seleccionar un usuario de la tabla 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

try {


    //conexiones con la base de datos 
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    UsuariosMapper::init($db);


    //Funcion static de la clase mapper la cual selecciona un solo registro 
    $data = UsuariosMapper::selectOne((int)$_POST["id"]);

    echo json_encode($data);
} catch (Throwable $th) {
    throw $th;
}
