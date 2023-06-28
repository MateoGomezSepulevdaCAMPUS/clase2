<?php

class Alquiler extends Conectar {

    public function get_clientes(){
        try {
            $conectar = parent::Conexion();
            parent::set_name();
            $stm=$conectar->prepare("SELECT * FROM constructoras");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }

    }

    public function insertar_cliente($id_constructora,$nombre_constructora,$nit_constructora,$nombre_representante,$email_contacto,$telefono_contacto){
        $conectar=parent::Conexion();
        prent::set_name();
        $stm="INSERT INTO constructoras(id_constructora,nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto) VALUES ?,?,?,?,?,?";
        $stm=$conectar->prepare($stm);
        $stm->binValue(1,$id_constructora);
        $stm->binValue(2,$nombre_constructora);
        $stm->binValue(3,$nit_constructora);
        $stm->binValue(4,$nombre_representante);
        $stm->binValue(5,$email_contacto);
        $stm->binValue(6,$telefono_contacto);
        $stm->execute();

        return $stm->fetchAll(PDO::FETCH_ASSOC);
    }
}


?>

