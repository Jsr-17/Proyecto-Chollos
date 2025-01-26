
<?php
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
    public static function remove(Usuario_Chollo $usuario_Chollo)
    {
        $el = self::$db->prepare(
            "Delete from Usuario_Chollo where id=:id"
        );
        $el->execute([
            ":id" => $usuario_Chollo->getId()
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
    public static function updateOne(Usuario_Chollo $usuario_Chollo, $columna)
    {
        $el = self::$db->prepare("Update Usuario_Chollo SET " . $columna . " =:" . $columna . " where  id =:id ");
        $el->execute([
            [":id" => $usuario_Chollo->getId(), ":columna" => $usuario_Chollo->{'get' . ucfirst($columna)}()]
        ]);
    }

    //Funcion que realiza la selección de todos los datos y retorna un array asociativo de los datos de la tabla intermdedia
    public static function selectAll()
    {
        $el = self::$db->prepare("Select * from Usuario_Chollo");
        $el->execute();
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }

    //funcion que realiza la seleccion de un registro en concreto de la tabla
    public static function selectOne($value)
    {
        $el = self::$db->prepare("Select * from Usuario_Chollo where id=:id");
        $el->execute([":id" => $value]);
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
    //funcino que realiza una seleccion de un registro en concreto filtrado por los campos que solicite el usuario dentro del objketo
    public static function selectOneBy($columna, $value)
    {
        $el = self::$db->prepare("Select * from Usuario_Chollo where " . $columna . " = :value");
        $el->execute([":value" => $value]);
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
}
