<?php
include "DataMapper.php";
//Clase encargada de realizar las peticiones a la base de datos de la tabla de usarios
class UsuariosMapper extends DataMapper
{
    //función encargada de enviar un registro a la base de datos
    public static function add(Usuario $usuario)
    {
        // guarda en una variable el resultado de la ejecución del metodo del atributo static de la clase padre y prepara una sentencia sql
        //La cual es una insercion a la base de datos 
        $el = self::$db->prepare(
            "INSERT into Usuario SET edad =:edad, nombre =:nombre, correo =:correo
            ,username =:username, contrasenya =:contrasenya , admin =:admin"
        );
        //Ejecuta la sentencia almacenada 
        $el->execute([
            ':edad' => $usuario->getEdad(),
            ':nombre' => $usuario->getNombre(),
            ':username' => $usuario->getUsername(),
            ':contrasenya' => $usuario->getContrasenya(),
            ':correo' => $usuario->getUsername(),
            //condicional necesario debido a que php cuando recibe un dato false no lo trata de igual forma que otros lenguajes a los que estoy acostumbrado
            ':admin' => $usuario->getAdmin() ? 1 : 0
        ]);
    }

    //funcion que realiza el borrado de la base de datos de un registro en concreto
    public static function remove(Usuario $usuario)
    {
        //prepara una sentencia sql en este caso de borrado por id
        $el = self::$db->prepare(
            "Delete from Usuario where id = :id"
        );

        //prepara la ejecución de la sentenci a sql
        $el->execute([":id" => $usuario->getId()]);
    }

    //funcion static que actualiza de un usuario todos los datos ya sean iguales o no es decir sustituye todos los valores del objeto que le pasamos por los mismos o diferentes del 
    //registro de la tabla
    public static function updateAll(Usuario $usuario)
    {
        //prepara la sentencia sql de actualizacion de un registro
        $el = self::$db->prepare(
            "UPDATE  Usuario SET edad =:edad, nombre =:nombre, correo =:correo
            ,username =:username, contrasenya =:contrasenya , admin =:admin where id=:id"
        );
        //ejecuta la sentencia sql 
        $el->execute([
            ":id" => $usuario->getId(),
            ':edad' => $usuario->getEdad(),
            ':nombre' => $usuario->getNombre(),
            ':username' => $usuario->getUsername(),
            ':contrasenya' => $usuario->getContrasenya(),
            ':correo' => $usuario->getUsername(),
            ':admin' => $usuario->getAdmin() ? 1 : 0
        ]);
    }

    //En esete caso solo actualizara la columna que el usuario le pase por parametro 
    public static function updateOne(Usuario $usuario, $columna, $valor)
    {
        $el = self::$db->prepare(
            "UPDATE Usuario SET " . (string)$columna . " =:value  where id=:id"
        );
        $el->execute([
            ":id" => $usuario->getId(),
            ":value" => $valor
        ]);
    }
    //Consulta que realiza una seleccion a toda la tabla de Usuario sacando todos los registros
    public static function selectAll()
    {
        //Ser ntencia sql donde * significa todo y al no colocar where elije todo
        $el = self::$db->prepare(
            "SELECT  * from Usuario"
        );
        $el->execute();
        //lo retorna como un array asociativo
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }

    //en este caso solo selecciona un usuario e de ahi el uso del filtro where
    public static function selectOne($usuario)
    {
        $el = self::$db->prepare(
            "SELECT  * from Usuario Where id= :id"
        );

        $el->execute([":id" => $usuario]);
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
    //en este caso selecciona todos los campos de un elemento el cual cumpla un determinado resultado
    public static function selectOneBy($column, $element)
    {
        $el = self::$db->prepare(
            "SELECT  * from Usuario Where " . $column . " =:value"
        );

        $el->execute([":value" => $element]);
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
}
