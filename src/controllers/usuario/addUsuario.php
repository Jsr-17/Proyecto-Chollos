<?php

//controlador que va a recibir la informacion del cliente cual será el objetivo de crear un usuario nuevo y usando un modelo de datos esquematizara susodicho
include "../models/Usuario.php";
include "../models/UsuariosMapper.php";

try {
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');


    $edad = $_POST['edad'];
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $username = $_POST['username'];
    $contrasenya = $_POST['contrasenya'];




    //mediante el post se creara el usuario automaticamente
    $usuario = new Usuario(
        0,
        $edad,
        $nombre,
        $correo,
        $username,
        $contrasenya,
        false
    );







    //conexion base datos
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //incorporacion a  la clase mapper
    UsuariosMapper::init($db);






    //llamaremos al metodo definido para añadir un usuario

    UsuariosMapper::add($usuario);

    $response = array(
        "status" => "success",
        "message" => "El usuario ha sido creado correctamente."
    );

    // Convertir el array a JSON y devolverlo
    echo json_encode($response);

    //cerrar las diferentes variables de la base de datos

} catch (Throwable $th) {
    throw $th;
}
