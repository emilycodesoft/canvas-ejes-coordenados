const cartesianoConEjesCoordenados = new EjesCoordenados(100, 100, 50, 50, 800, 400, 22, 'días', 'ventas', 1, 5);

//enlazar datos con inputs
//resize cuando se pidan valores del cartesiano mas grandes
// canvas ocupe todo el ancho
cartesianoConEjesCoordenados.inicializar();
const triangulo = new Triangulo([200, 320, 300], [280, 220, 150], 'pink', 10);
triangulo.dibujar();
