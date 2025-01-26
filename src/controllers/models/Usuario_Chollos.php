<?php
//clase encargada de relacionar los tipos de datos con los valores de la base de datos y de las consultas sql 
class Usuario_Chollo
{
    public function __construct(
        private int $id,
        private int $id_usuario,
        private int $id_chollo,
        private string $fecha,

    ) {}

    // Getters
    public function getId(): int
    {
        return $this->id;
    }

    public function getId_usuario(): int
    {
        return $this->id_usuario;
    }

    public function getId_chollo(): int
    {
        return $this->id_chollo;
    }
    public function getFecha(): string
    {
        return $this->fecha;
    }

    // Setters
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function setId_usuario(int $id_usuario): void
    {
        $this->id_usuario = $id_usuario;
    }

    public function setId_chollo(int $id_chollo): void
    {
        $this->id_chollo = $id_chollo;
    }

    public function setDescripcion(string $fecha): void
    {
        $this->fecha = $fecha;
    }
}
