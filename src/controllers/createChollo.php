<?php
include "./models/Usuario.php";
include "./models/DataMapper.php";
include "./models/UsuariosMapper.php";

try {
    //Esta variable se encarga de hacer la conexión con la base de datos 
    $db = new PDO("mysql:host=db;dbname=Chollos_Database;charset=utf8", "admin", "123456");
    //Lanza una excepcion 
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    echo "Conexión exitosa!";
} catch (PDOException $e) {

    echo "Error de conexión: " . $e->getMessage();
}

//Clase encargada de Iniciar el mapeador
DataMapper::init($db);






/*Resumen para recordar DataMapper es la clase que inicializa la conexion de la base de datos con las diferentes clases que diseñaré con el
el modelado de los datos y su consecuente mapeador el cual es sino una clase con los diferentes comandos sql para que sea mas sencillo y adaptable el
código*/
/*Por que hacer el codigo de esta forma? mucho mas sencillo el acceder a la forma de la base de datos y sus modificaciones y mantenible con el tiempo
*/

$usuarios = new Usuario("1", "9023", "jau", "aaaaaa@gmail.com", "aaaaertwesda", "12346", false);

UsuariosMapper::updateAll($usuarios);
