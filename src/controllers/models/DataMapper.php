<?php
//Clase que uso para que los hijos hereden la conexion a la base de datos sus funciones
class DataMapper
{
    //atributo el cual sera utilizado para almacenar la conexión a la base de datos 
    public static $db;

    //funcion la cual inicializará el valor de la variable statica con la base de datos un setter por asi decirlo
    public static function init($db)
    {
        self::$db = $db;
    }
    //funcion encargada de cerrar la conexión con la base de datos ojo solo lo hace con el objeto luego hay que cerrar la variable
    public static function close()
    {
        self::$db = null;
    }
}
