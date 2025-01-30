<?php
//controlador encargado de recibir los campos por los que el cliente quiere filtrar 
include "../models/Usuario.php";
include "../models/UsuariosMapper.php";
header("Access-Control-Allow-Origin: *");


try {

    $columna = $_POST['columna'];
    $valor = $_POST['valor'];

    //conexiones con las bases de datos 
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    UsuariosMapper::init($db);



    //funcion encargada de seleccionar unos registros de la base de datos en concreto

    $data = UsuariosMapper::selectOneBy($columna, $valor);
    echo json_encode($data);
} catch (Throwable $th) {
    throw $th;
}
