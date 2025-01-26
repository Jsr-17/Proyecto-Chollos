<?php
//clase encargada de realizar un modelo de datos que se relaciona con la forma diseñada en la base de datos con el objetivo de mayor fidelidad de tipos
class Usuario
{
    public function __construct(
        private int $id,
        private string $edad,
        private string $nombre,
        private string $correo,
        private string $username,
        private string $contrasenya,
        private bool $admin
    ) {}
    // Getters
    public function getId(): int
    {
        return $this->id;
    }

    public function getEdad(): string
    {
        return $this->edad;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function getCorreo(): string
    {
        return $this->correo;
    }

    public function getUsername(): string
    {
        return $this->username;
    }
    public function getContrasenya(): string
    {
        return $this->contrasenya;
    }

    public function getAdmin(): bool
    {
        return $this->admin;
    }

    // Setters
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function setEdad(string $edad): void
    {
        $this->edad = $edad;
    }

    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
    }

    public function setCorreo(string $correo): void
    {
        $this->correo = $correo;
    }

    public function setUsername(string $username): void
    {
        $this->username = $username;
    }
    public function setContrasenya(string $contrasenya): void
    {
        $this->contrasenya = $contrasenya;
    }

    public function setAdmin(bool $admin): void
    {
        $this->admin = $admin;
    }
}
