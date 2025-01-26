<?php
//Modelo de datos que se basarán todos los chollos o productos de la página web
class Chollo
{
    public function __construct(
        private int $id,
        private string $precio,
        private string $nombre,
        private string $descripcion,
        private string $enlace
    ) {}

    // Getters
    public function getId(): int
    {
        return $this->id;
    }

    public function getPrecio(): string
    {
        return $this->precio;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function getDescripcion(): string
    {
        return $this->descripcion;
    }

    public function getEnlace(): string
    {
        return $this->enlace;
    }

    // Setters
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function setPrecio(string $precio): void
    {
        $this->precio = $precio;
    }

    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
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
