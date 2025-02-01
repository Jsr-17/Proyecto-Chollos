<?php
include "DataMapper.php";
//Clase encargada de realizar todas las peticiones a la tabla intermedia de la base de datos de manera estática
class Usuario_ChollosMapper extends DataMapper
{
    //funcion envcargada de añadir un dato a la tabla intermedia de usuarios y chollos
    public static function add(Usuario_Chollo $usuario_Chollo)
    {
        $el = self::$db->prepare(
            "
        INSERT INTO Usuario_Chollo (id_usuario, id_chollo, fecha)
        VALUES (:id_usuario, :id_chollo, :fecha)
        "
        );
        $el->execute([
            ":id_usuario" => $usuario_Chollo->getId_usuario(),
            ":id_chollo" => $usuario_Chollo->getId_chollo(),
            ":fecha" => $usuario_Chollo->getFecha()
        ]);
    }

    //funcion encargada de borrar los datos de un registro de la tabla intermedia en concreto 
    public static function remove($id)
    {
        $el = self::$db->prepare(
            "Delete from Usuario_Chollo where id=:id"
        );
        $el->execute([
            ":id" => $id
        ]);
    }
    //funcion encargadad de actializar todos los campos o pisar los datos de un registro en concreto
    public static function updateAll(Usuario_Chollo $usuario_Chollo): void
    {
        $el = self::$db->prepare(
            "UPDATE  Usuario_Chollo SET  id_usuario=:id_usuario,id_chollo=:id_chollo,fecha=:fecha   where id= :id"
        );
        $el->execute([":id" => $usuario_Chollo->getId()]);
    }

    //Funcion encargada de modificar los datos de un registro de la tabla intermdedia y colocar un valor predefinido en el objeto
    public static function updateOne($id, $columna, $valor)
    {
        $el = self::$db->prepare("Update Usuario_Chollo SET " . $columna . " =:valor where  id =:id ");
        $el->execute([
            [":id" => $id, ":columna" => $columna, ":valor" => $valor]
        ]);
    }

    //funcion que selecciona una serie de tablas de la base de datos con el objetivo de relacionar la informacion de ellas 
    //con un único usuario
    public static function selectOneUserProductsData($id)
    {
        $el = self::$db->prepare("SELECT 
    Usuario_Chollo.id_usuario,
    Usuario_Chollo.id_chollo,
    Usuario.edad,
    Usuario.nombre AS nombre_Usuario,
    Usuario.correo,
    Usuario.username,
    Usuario.admin,
    Chollo.precio,
    Chollo.nombre AS nombre_Chollo,
    Chollo.descripcion
FROM 
    Usuario_Chollo
INNER JOIN 
    Usuario ON Usuario_Chollo.id_usuario = Usuario.id
INNER JOIN 
    Chollo ON Usuario_Chollo.id_chollo = Chollo.id WHERE Usuario.id= :id ;");
        $el->execute([":id" => $id]);
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }


    //Seleccion de varias tablas donde se contextualiza toda la informacion de todos los datos 

    public static function selectUsersProductsData()
    {
        $el = self::$db->prepare("SELECT 
    Usuario_Chollo.id_usuario,
    Usuario_Chollo.id_chollo,
    Usuario.edad,
    Usuario.nombre AS nombre_Usuario,
    Usuario.correo,
    Usuario.username,
    Usuario.admin,
    Chollo.precio,
    Chollo.nombre AS nombre_Chollo,
    Chollo.descripcion
FROM 
    Usuario_Chollo
INNER JOIN 
    Usuario ON Usuario_Chollo.id_usuario = Usuario.id
INNER JOIN 
    Chollo ON Usuario_Chollo.id_chollo = Chollo.id ;");
        $el->execute();
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
}
