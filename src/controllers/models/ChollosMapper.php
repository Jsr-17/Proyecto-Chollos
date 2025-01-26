<?php
//Clase encargada de exportar de manera estática todos los metodos que son relacionados con las consultas a la tabla de chollos de la base de datos
class ChollosMapper extends DataMapper
{

    //Función encargada de añadir un chollo
    public static function add(Chollo $chollo)
    {
        //llama a la conexion con la base de datos y prepara una sentencia sql la cual se basa en insertar un objeto en concreto no pongo la id para
        //que así se autoincremente en la base de datos 

        $st = self::$db->prepare(
            "insert into Chollos set
            precio = :precio,
            nombre = :nombre,
            descripcion=:descripcion,
            enlace=:enlace"
        );
        //Ejecuta la consulta con la parametrización con el objeto que se le pasa por parametro
        $st->execute(array(
            ':precio' => $chollo->getPrecio(),
            ':nombre' => $chollo->getNombre(),
            ':descripcion' => $chollo->getDescripcion(),
            ':enlace' => $chollo->getEnlace()
        ));
    }
    //Función estática ::  
    public static function remove(Chollo $chollo)
    {
        //self::$db atributo estatico que referencia conexión base de datos
        $el = self::$db->prepare(
            "Delete from Chollos where id= :id"
        );
        //Se coloca un array asociativo la cual relaciona el atributo del objeto con el index del anterior array 
        //los : indican el valor que tomara el array asociativo por lo que deben de ser igual arriba y abajo
        $el->execute([":id" => $chollo->getId()]);
    }
    public static function updateAll(Chollo $chollo)
    {
        //-> es la funcion de la clase PDO
        $el = self::$db->prepare("UPDATE Chollos SET precio = :precio, nombre = :nombre, descripcion = :descripcion, enlace = :enlace WHERE id = :id");
        $el->execute([
            ":id" => $chollo->getId(),
            ":precio" => $chollo->getPrecio(),
            ":nombre" => $chollo->getNombre(),
            ":descripcion" => $chollo->getDescripcion(),
            ":enlace" => $chollo->getEnlace()
        ]);
    }

    public static function updateOne(Chollo $chollo, $columna, $valor)
    {
        $el = self::$db->prepare(
            "UPDATE Chollos SET " . (string)$columna . " =:value  where id=:id"
        );
        $el->execute([
            ":id" => $chollo->getId(),
            ":value" => $valor
        ]);
    }
    public static function selectAll()
    {
        $el = self::$db->prepare("Select * from Chollos");
        $el->execute();
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
    public static function selectOne($value)
    {
        $el = self::$db->prepare("Select * from Chollos where id=:id");
        $el->execute([":id" => $value]);
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
    public static function selectOneBy($columna, $value)
    {
        $el = self::$db->prepare("Select * from Chollos where " . $columna . " = :value");
        $el->execute([":value" => $value]);
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
}
