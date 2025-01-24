<?php
//Clase que uso para que los hijos se conecten a la base de datos sus funciones
class DataMapper
{
    public static $db;

    public static function init($db)
    {
        self::$db = $db;
    }
}
