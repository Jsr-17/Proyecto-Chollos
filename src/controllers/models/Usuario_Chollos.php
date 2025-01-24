<?php

class Chollo
{
    public function __construct(
        private int $id,
        private string $id_usuario,
        private string $id_chollo,
        private string $fecha,

    ) {
    }

    // Getters
    public function getId(): int
    {
        return $this->id;
    }

    public function getId_usuario(): string
    {
        return $this->id_usuario;
    }

    public function getId_chollo(): string
    {
        return $this->id_chollo;
    }

    // Setters
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function setId_usuario(string $id_usuario): void
    {
        $this->id_usuario = $id_usuario;
    }

    public function setId_chollo(string $id_chollo): void
    {
        $this->id_chollo = $id_chollo;
    }

    public function setDescripcion(string $descripcion): void
    {
        $this->descripcion = $descripcion;
    }

    public function setEnlace(string $enlace): void
    {
        $this->enlace = $enlace;
    }
}
