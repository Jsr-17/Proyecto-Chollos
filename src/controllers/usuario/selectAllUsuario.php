<?php

//controlador encargado de seleccionar todos los usuarios y mostralos a la vista 

include "../models/Usuario.php";
include "../models/UsuariosMapper.php";

header("Access-Control-Allow-Origin: *");
try {

    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    UsuariosMapper::init($db);
    //almacenamos en una variable el resultado de todos los datos 
    $data = UsuariosMapper::selectAll();

    echo json_encode($data, JSON_FORCE_OBJECT);
} catch (Throwable $th) {
    throw $th;
}
