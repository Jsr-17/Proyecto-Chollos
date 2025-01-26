<?php
//cosntrolador encargado de actualizar todo lo referente a un usuario 
include "../models/Usuario.php";
include "../models/UsuariosMapper.php";
header("Access-Control-Allow-Origin: *");
try {
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    UsuariosMapper::init($db);
    //establece un modelo de datos cuales recibe por post
    $usuario = new Usuario(
        $_POST["id"],
        $_POST["edad"],
        $_POST["nombre"],
        $_POST["correo"],
        $_POST["username"],
        $_POST["contrasenya"],
        (bool) $_POST["admin"]
    );
    //funcion statcia que se encarga mediante el uso de un modelo de datos actualizar los datos del registro
    UsuariosMapper::updateAll($usuario);
    echo "consulta realizada";
} catch (Throwable $th) {
    throw $th;
}
