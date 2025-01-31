<?php
//cosntrolador encargado de actualizar todo lo referente a un usuario 
include "../models/Chollo.php";
include "../models/ChollosMapper.php";
header("Access-Control-Allow-Origin: *");
try {
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    ChollosMapper::init($db);
    //establece un modelo de datos cuales recibe por post
    $chollo = new Chollo(
        $_POST["id"],
        $_POST["precio"],
        $_POST["nombre"],
        $_POST["descripcion"],
        $_POST["enlace"],

    );
    //funcion statcia que se encarga mediante el uso de un modelo de datos actualizar los datos del registro
    ChollosMapper::updateAll($chollo);

    $response = array(
        "status" => "success",
        "message" => "El chollo ha sido actualizado correctamente."
    );

    echo json_encode($response);
} catch (Throwable $th) {
    throw $th;
}
