<?php

//controlador encargado de seleccionar todos los usuarios y mostralos a la vista 
include "../models/Usuario_Chollos.php";
include "../models/Usuario_ChollosMapper.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");



try {

    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    Usuario_ChollosMapper::init($db);
    //almacenamos en una variable el resultado de todos los datos 
    $data = Usuario_ChollosMapper::selectUsersProductsData();

    echo json_encode($data);
} catch (Throwable $th) {
    throw $th;
}
