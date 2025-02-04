<?php
include "../models/Chollo.php";
include "../models/ChollosMapper.php";

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');


$precio = $_POST['precio'];
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$enlace = $_POST['enlace'];


//mediante el post se creara el usuario automaticamente
$chollo = new Chollo(0, $precio, $nombre, $descripcion, $enlace = "");

try {


    //conexion base datos
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //incorporacion a  la clase mapper
    ChollosMapper::init($db);



    //llamaremos al metodo definido para añadir un usuario

    ChollosMapper::add($chollo);

    $response = array(
        "status" => "success",
        "message" => "El chollo ha sido creado correctamente."
    );

    // Convertir el array a JSON y devolverlo
    echo json_encode($response);

    //cerrar las diferentes variables de la base de datos

} catch (Throwable $th) {
    throw $th;
}
