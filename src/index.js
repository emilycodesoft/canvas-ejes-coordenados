/* FUNCIONES SIMPLIFICADAS
   Coordenadas Cartesianas
   ------------------------------------------
   Programa que contiene funciones similares a CANVAS
   pero simplificadas y adaptadas al plano cartesiano

   Autor: José Gilberto Vargas Cano (Docente)
   Fecha: Abril 2021
   Versión: 1.0
*/

const linea = new Linea(255, 200, 'red', 1);

linea.mover(0, 0);
linea.dibujar();

// que le sume lo de mover en el codigo para que quede mas entendible, mover de primero para que quede mejor
const linea2 = new Linea(300, 200, 'red', 1);

linea2.mover(255, 200);
linea2.dibujar();

const rectangulo = new Rectangulo(60, 250, 120, 100);

rectangulo.mover(40, 50);
rectangulo.dibujar();

const circulo = new Circulo(100, 300, 50, 'blue', 'black');
circulo.dibujar();

const arco = new Arco(400, 100, 50, 5, 2, 'blue', 'black');
arco.dibujar();

const texto = new Texto('hola', 100, 50, 'bold 50px monospace');
texto.dibujar();
