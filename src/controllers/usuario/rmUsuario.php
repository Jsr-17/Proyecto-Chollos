<?php
//controlador encargado de eliminar un usuario en concreto  y con el uso del modelado de datos esquematizará esta informacion
include "../models/Usuario.php";
include "../models/UsuariosMapper.php";

try {

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");


    $id = $_POST['id'];


    //conexion tanto en la variable como en la  clase con la base de datos 
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    UsuariosMapper::init($db);

    //mediante POst recibiremos la informacion del usuario a eliminar


    //llamamos al metodo de la clase mapper encargada de eliminar al usuario
    UsuariosMapper::remove($id);

    $response = array(
        "status" => "success",
        "message" => "El usuario ha sido eliminado correctamente."
    );

    // Convertir el array a JSON y devolverlo
    echo json_encode($response);
} catch (Throwable $th) {
    throw $th;
}
