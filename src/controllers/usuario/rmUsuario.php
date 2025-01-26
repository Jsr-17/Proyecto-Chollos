<?php
//controlador encargado de eliminar un usuario en concreto  y con el uso del modelado de datos esquematizará esta informacion
include "../models/Usuario.php";
include "../models/UsuariosMapper.php";

try {

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");


    $id = $_POST['id'];
    $edad = $_POST['edad'];
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $username = $_POST['username'];
    $contrasenya = $_POST['contrasenya'];
    $admin = $_POST['admin'];


    //mediante el post se creara el usuario automaticamente
    $usuario = new Usuario(
        $id,
        $edad,
        $nombre,
        $correo,
        $username,
        $contrasenya,
        (bool)$admin
    );



    //conexion tanto en la variable como en la  clase con la base de datos 
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    UsuariosMapper::init($db);

    //mediante POst recibiremos la informacion del usuario a eliminar


    //llamamos al metodo de la clase mapper encargada de eliminar al usuario
    UsuariosMapper::remove($usuario);

    echo "consulta realizada";
} catch (Throwable $th) {
    throw $th;
}
