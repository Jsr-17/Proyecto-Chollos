<?php
include "../models/Chollo.php";
include "../models/ChollosMapper.php";

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

// Obtener los datos del formulario
$precio = $_POST['precio'];
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$directorio = "imgs/";

// Verifica si se ha enviado un archivo
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['enlace'])) {
    $file = $_FILES['enlace']; //esta es la funcion de php que recoge los archivos 
    //esta parte de aqui se encarga de asignar un nombre unico a cada imagen
    $fileName = time() . '-' . basename($file['name']);
    //esta variable se encarga de crear el path donde sera almacenada la imagen
    $filePath = $directorio . $fileName;
    //esta funcion es la encargada de mover el archivo al directorio 
    move_uploaded_file($file['tmp_name'], $filePath);

    $enlace = $filePath;
} else {
    echo 'No se ha enviado ningún archivo.';
    exit;
}

// Procesar la información del "chollo"
$chollo = new Chollo(0, $precio, $nombre, $descripcion, $enlace);

try {
    // Conexion a la base de datos
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Incorporación a la clase mapper
    ChollosMapper::init($db);

    // Añadir el chollo a la base de datos
    ChollosMapper::add($chollo);

    // Respuesta de éxito
    $response = array(
        "status" => "success",
        "message" => "El chollo ha sido creado correctamente."
    );

    // Convertir el array a JSON y devolverlo
    echo json_encode($response);
} catch (Throwable $th) {
    // Manejo de errores
    echo json_encode([
        "status" => "error",
        "message" => "Hubo un error al procesar la solicitud.",
        "error" => $th->getMessage()
    ]);
}
