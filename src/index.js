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

const rectangulo2 = new Rectangulo(100, 300, 120, 100);

rectangulo2.mover(40, 50);
rectangulo2.dibujar();
rectangulo2.relleno('green');

const circulo = new Circulo(100, 300, 50, 'blue', 'black');
circulo.dibujar();

const arco = new Arco(400, 100, 50, 5, 2, 'blue', 'black');
arco.dibujar();

const texto = new Texto('hola', 100, 50, 'bold 50px monospace', 'green');
texto.dibujar();

const triangulo = new Triangulo([100, 320, 350], [320, 350, 200], 'blue');
triangulo.dibujar();

let image = new Image();
image.src = 'img/números.jpg';

let imagen = new Imagen(image, 100, 100, 120);
imagen.cargarImagen();

var im2 = new Image();
im2.src = 'img/números.jpg';

let imagen2 = new Imagen(im2, 300, 100, 200, 300);
imagen2.cargarImagen();
