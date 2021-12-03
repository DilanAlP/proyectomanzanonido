<?php
class conexion{
    public static function conectar(){
        define('servidor','local');
        define('nombre_bd','login_pixki');
        define('usuario', 'root');
        define('password','');
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
        try{
            $conexion = new PDO("mysql:host = ".servidor.";dbname = ".nombre_bd,usuario,password,$opciones);
            return $conexion;
        }catch(Exception $e){
            die("El error de conexion es: ".$e->getMessage());
        }
    }
}
?>