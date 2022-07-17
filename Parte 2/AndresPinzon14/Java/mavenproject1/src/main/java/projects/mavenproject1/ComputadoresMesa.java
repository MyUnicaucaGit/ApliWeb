/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package projects.mavenproject1;

/**
 *
 * @author User
 */
public class ComputadoresMesa extends Computadores {

    private final static Integer ALMACENAMIENTO_BASE = 50;
// Variable
    private Integer almacenamiento;

// Constructor
    public ComputadoresMesa() {
//super ();
        this.peso = PESO_BASE;
        this.precioBase = PRECIO_BASE;
        this.consumoW = CONSUMO_W;
        this.almacenamiento = ALMACENAMIENTO_BASE;
    }

// Constructor
    public ComputadoresMesa(Double precioBase, Integer peso) {
        super(precioBase, peso);      
        this.almacenamiento = ALMACENAMIENTO_BASE;
    }

// Constructor
    public ComputadoresMesa(Double precioBase, Integer peso, char consumoW, Integer almacenamiento) {
        super(precioBase, peso, consumoW);       
        this.almacenamiento = almacenamiento;
    }
// Métodos

    public double calcularPrecio() {
        double adicion = super.calcularPrecio();
        if (almacenamiento > 100.0) {
            adicion += 50.0;
        }
        //codigo return adicion;
        return adicion;
    }

    public Integer getCarga() {
        return almacenamiento;
    }
}
