<?php
include "../models/Chollo.php";
include "../models/ChollosMapper.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$id = $_POST['id'];

try {


    //conexion base datos
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //incorporacion a  la clase mapper
    ChollosMapper::init($db);

    //llamaremos al metodo definido para añadir un usuario

    ChollosMapper::remove($id);

    $response = array(
        "status" => "success",
        "message" => "El chollo ha sido eliminado correctamente."
    );

    // Convertir el array a JSON y devolverlo
    echo json_encode($response);

    //cerrar las diferentes variables de la base de datos

} catch (Throwable $th) {
    throw $th;
}
