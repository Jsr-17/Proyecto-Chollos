<?php

//controlador encargado de seleccionar todos los usuarios y mostralos a la vista 
include "../models/Usuario_Chollos.php";
include "../models/Usuario_ChollosMapper.php";

header("Access-Control-Allow-Origin: *");

$id_usuario = $_POST['id_usuario'];
$id_chollo = $_POST['id_chollo'];
$fecha = $_POST['fecha'];


//mediante el post se creara el usuario automaticamente
$data = new Usuario_Chollo(0, $id_usuario, $id_chollo, $fecha);

try {

    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    Usuario_ChollosMapper::init($db);
    //almacenamos en una variable el resultado de todos los datos 
    Usuario_ChollosMapper::add($data);

    $response = array(
        "status" => "success",
        "message" => "El pedido ha sido creado correctamente."
    );

    // Convertir el array a JSON y devolverlo
    echo json_encode($response);
} catch (Throwable $th) {
    throw $th;
}
