<?php

//cotntrolador encargado de modificar una columna de un registro en concreto 
include "../models/Chollo.php";
include "../models/ChollosMapper.php";
header("Access-Control-Allow-Origin: *");

try {
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    ChollosMapper::init($db);

    $chollo = new Chollo(
        $_POST["id"],
        $_POST["precio"],
        $_POST["nombre"],
        $_POST["descripcion"],
        $_POST["enlace"],

    );
    $columna = $_POST["columna"];
    $value = $_POST["valor"];

    ChollosMapper::updateOne($chollo, $columna, $value);


    $response = array(
        "status" => "success",
        "message" => "El chollo ha sido actualizado correctamente."
    );
} catch (Throwable $th) {
    throw $th;
}
