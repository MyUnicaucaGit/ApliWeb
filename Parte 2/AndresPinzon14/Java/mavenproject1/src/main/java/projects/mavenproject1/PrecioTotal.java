/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package projects.mavenproject1;

/**
 *
 * @author User
 */
public class PrecioTotal {

    private double totalComputadores = 0.0;
    private double totalComputadoresPortatiles = 0.0;
    private double totalComputadoresMesa = 0.0;
    private Computadores[] listaComputadores;

// Constructor
    public PrecioTotal(Computadores[] pComputadores) {
        this.listaComputadores = pComputadores;
    }

    public void mostrarTotales() {
// Código
        for (int i = 0; i < listaComputadores.length; i++) {
            if (listaComputadores[i] instanceof Computadores) {
                totalComputadores += listaComputadores[i].calcularPrecio();
            }
            if (listaComputadores[i] instanceof ComputadoresMesa) {
                totalComputadoresMesa += listaComputadores[i].calcularPrecio();
            }
            if (listaComputadores[i] instanceof ComputadoresPortatiles) {
                totalComputadoresPortatiles += listaComputadores[i].calcularPrecio();
            }
        }
// Mostramos los resultados
        System.out.println("La suma del precio de los computadores es de " + totalComputadores);
        System.out.println("La suma del precio de los computadores de mesa es de "
                + totalComputadoresMesa);
        System.out.print("La suma del precio de los computadores portátiles es de "
                + totalComputadoresPortatiles);
    }
}
