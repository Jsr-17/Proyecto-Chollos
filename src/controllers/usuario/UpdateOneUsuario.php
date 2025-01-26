<?php

//cotntrolador encargado de modificar una columna de un registro en concreto 

include "../models/Usuario.php";
include "../models/UsuariosMapper.php";
header("Access-Control-Allow-Origin: *");

try {
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    UsuariosMapper::init($db);

    $usuario = new Usuario(
        $_POST["id"],
        $_POST["edad"],
        $_POST["nombre"],
        $_POST["correo"],
        $_POST["username"],
        $_POST["contrasenya"],
        (bool) $_POST["admin"]
    );
    $columna = $_POST["columna"];
    $value = $_POST["valor"];

    UsuariosMapper::updateOne($usuario, $columna, $value);
} catch (Throwable $th) {
    throw $th;
}
