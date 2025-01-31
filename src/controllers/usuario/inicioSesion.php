<?php

try {
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');


    $username = $_POST['username'];
    $contrasenya = $_POST['contrasenya'];


    //conexion base datos
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //incorporacion a  la clase mapper


    $con = $db->prepare("SELECT id, correo, username, contrasenya FROM Usuario WHERE username = :username AND contrasenya = :contrasenya");
    $con->execute([":username" => $username, ":contrasenya" => $contrasenya]);

    $user = $con->fetch(PDO::FETCH_ASSOC);


    if ($user) {
        $response = array(
            "status" => "success",
            "message" => "Usuario autenticado correctamente."
        );
    } else {
        $response = array(
            "status" => "failed",
            "message" => "Usuario o contraseña incorrectos."
        );
    }




    echo json_encode($response, JSON_FORCE_OBJECT);

    //cerrar las diferentes variables de la base de datos

} catch (Throwable $th) {
    throw $th;
}
