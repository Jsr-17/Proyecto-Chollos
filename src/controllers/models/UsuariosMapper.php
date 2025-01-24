<?php

class UsuariosMapper extends DataMapper
{

    public static function add(Usuario $usuario)
    {
        $el = self::$db->prepare(
            "INSERT into Usuarios SET edad =:edad, nombre =:nombre, correo =:correo
            ,username =:username, contrasenya =:contrasenya , admin =:admin"
        );
        $el->execute([
            ':edad' => $usuario->getEdad(),
            ':nombre' => $usuario->getNombre(),
            ':username' => $usuario->getUsername(),
            ':contrasenya' => $usuario->getContrasenya(),
            ':correo' => $usuario->getUsername(),
            ':admin' => $usuario->getAdmin() ? 1 : 0
        ]);
    }
    public static function remove(Usuario $usuario)
    {
        $el = self::$db->prepare(
            "Delete from Usuarios where id = :id"
        );

        $el->execute([":id" => $usuario->getId()]);
    }
    public static function updateAll(Usuario $usuario)
    {
        $el = self::$db->prepare(
            "UPDATE  Usuarios SET edad =:edad, nombre =:nombre, correo =:correo
            ,username =:username, contrasenya =:contrasenya , admin =:admin where id=:id"
        );
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
    public static function updateOne(Usuario $usuario, $columna)
    {
        $el = self::$db->prepare(
            "UPDATE Usuarios SET " . (string)$columna . " =:" . (string)$columna . " where id=:id"
        );
        $el->execute([
            ":id" => $usuario->getId(),
            ":" . $columna => $usuario->{"get" . ucfirst($columna)}()
        ]);
    }

    public static function selectAll()
    {
        $el = self::$db->prepare(
            "SELECT  * from Usuarios"
        );
        $el->execute();
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
    public static function selectOne(Usuario $usuario)
    {
        $el = self::$db->prepare(
            "SELECT  * from Usuarios Where id= :id"
        );

        $el->execute([":id" => $usuario->getId()]);
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
    public static function selectOneBy($column, $element)
    {
        $el = self::$db->prepare(
            "SELECT  * from Usuarios Where " . $column . " = :" . $element
        );

        $el->execute([":" . $element => $element]);
        return $el->fetchAll(PDO::FETCH_ASSOC);
    }
}
