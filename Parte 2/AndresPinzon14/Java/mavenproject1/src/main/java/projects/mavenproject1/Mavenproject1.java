/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package projects.mavenproject1;

/**
 *
 * @author User
 */
public class Mavenproject1 {

    public static void main(String[] args) {
        Computadores computadores[] = new Computadores[6];
        computadores[0] = new Computadores(150.0, 70, 'A');
        computadores[1] = new ComputadoresMesa(70.0, 40);
        computadores[2] = new ComputadoresPortatiles(600.0, 70, 'D', 50, false);
        computadores[3] = new Computadores();
        computadores[4] = new Computadores(500.0, 60, 'A');
        computadores[5] = new Computadores(700.0, 50, 'D');
        PrecioTotal solucion1 = new PrecioTotal(computadores);
        solucion1.mostrarTotales();
        System.out.println();
    }
}
