const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

class Linea {
  constructor(x, y, color, ancho) {
    this.x = x;
    this.y = canvas.height - y;
    this.color = color;
    this.ancho = ancho;
  }
  mover(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - y);
  }
  dibujar() {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.ancho;
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}

class Triangulo {
  constructor(x, y, color, ancho) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.ancho = ancho;
  }
  mover(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - y);
  }
  dibujar() {
    ctx.lineWidth = this.ancho;
    ctx.strokeStyle = this.color;
    this.mover(this.x[0], this.y[0]);
    for (let i = 0; i <= 2; i++) {
      let lineaTriangulo = new Linea(this.x[2 - i], this.y[2 - i]);
      lineaTriangulo.dibujar();
    }
  }
}

class Texto {
  constructor(texto, x, y, fuente, color) {
    this.texto = texto;
    this.x = x;
    this.y = canvas.height - y;
    this.fuente = fuente;
    this.color = color;
  }
  dibujar() {
    ctx.fillStyle = this.color;
    ctx.font = this.fuente;
    ctx.fillText(this.texto, this.x, this.y);
  }
}

class FuncionCuadratica {
  constructor(x, y, n, n2) {
    this.x = x;
    this.y = y;
    this.n = n;
    this.n2 = n2;
  }
  mover(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - y);
  }
  agregarLinea() {
    // debugger;
    this.mover(this.x, this.y);
    while (this.n < 420) {
      // que ancho + this.x
      this.n *= 2;
      this.n2 *= 2;
      this.mover(this.n, this.n2);
      new Linea(this.n, this.n + 50, 'blue').dibujar(); // 50 lo introduce el usuario en espacio X y Y
      this.mover(this.x, this.n2);
    }
    /* this.mover(this.x, this.y)
    new Linea(this.x, this.y * 2).dibujar(); */
  }
}

class EjesCoordenados {
  constructor(
    x,
    y,
    espacioX,
    espacioY,
    ancho,
    largo,
    tamañoTexto,
    textoX,
    textoY,
    deCuantoenCuantoX = 0,
    deCuantoenCuantoY = 0
  ) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.largo = largo;
    this.espacioX = espacioX;
    this.espacioY = espacioY;
    this.tamañoTexto = tamañoTexto;
    this.textoX = textoX;
    this.textoY = textoY;
    this.deCuantoenCuantoX = deCuantoenCuantoX;
    this.deCuantoenCuantoY = deCuantoenCuantoY;
  }
  mover(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - y);
  }
  inicializar() {
    /* contador**contador
    let contador = 1 */
    let contador = 1;
    let potencia = 10;
    let x = 100;
    let y = 100;
    /* let x = this.x + 50;
    let y = 100 + potencia; */
    this.mover(100, 100);
    while (contador <= 6) {
      /* this.mover(x, y); */
      x = x + 50;
      let mul = potencia * contador;
      y = 100 + mul;
      // console.log(y);
      new Linea(x, y, 'blue').dibujar();
      this.mover(x, y);
      new Linea(x - (x - 100), y, 'red').dibujar();
      this.mover(x, y);
      console.log(x, y);
      // let x = contador * 100;
      potencia += 10;
      contador++;
    }
    /*     this.mover(100, 100);
    new Linea(100 + 50, 100 + 10, 'blue').dibujar();
    this.mover(150, 110);
    new Linea(150 + 50, 100 + 40, 'blue').dibujar();
    this.mover(200, 140);
    new Linea(200 + 50, 100 + 90, 'blue').dibujar();
    this.mover(250, 190);
    new Linea(250 + 50, 100 + 160, 'blue').dibujar();
    this.mover(300, 260);
    new Linea(300 + 50, 100 + 250, 'blue').dibujar();
    this.mover(350, 350);
    new Linea(350 + 50, 100 + 360, 'blue').dibujar(); */
    this.dibujarLineas();
    this.dibujarNumerosX();
    this.dibujarNumerosY();
  }
  funcionCuadratica() {}
  dibujarLineas() {
    /* dibujar linea x */
    this.mover(this.x, this.y);
    let lineaX = new Linea(this.x + this.ancho, this.y, 'black').dibujar();
    this.mover(this.x, this.y);
    /* dibujar linea y */
    let lineaY = new Linea(this.x, this.y + this.largo, 'black').dibujar();
  }
  dibujarNumerosY() {
    let iy = 0; //FIXME: Que es iy?
    let lineasEjeY = [];
    //let lineasFuncionCuadratica = [];
    /* let funcionCuadratica = new FuncionCuadratica(this.x, this.y, this.x, this.y);
    funcionCuadratica.agregarLinea(); */
    let yInicio = this.y;
    for (yInicio = this.y; yInicio < this.y + this.largo; yInicio += this.espacioX) {
      this.mover(this.x + 10, yInicio); // el espacio entre cada numero va a ser de 10 pixeles
      // ¿porque no funciona si dibujo las lineas en un bucle despues? porque la funcion mover no se ejutaria
      lineasEjeY.push(new Linea(this.x - 10, yInicio).dibujar()); // el yInicio la hace diagonal
      //lineasFuncionCuadratica.push(new Linea(this.n++, this.n * 2, 'red').dibujar());
      this.mover(this.x + 10, yInicio);
      if (this.deCuantoenCuantoY == 0) {
        new Texto((yInicio - this.y).toString(), this.y - 55, yInicio - 5, `${this.tamañoTexto}px Arial`).dibujar(); // el this.y - 55 y el yInicio no hace nada ¿por que? porque solo se llama cuando el usuario no digita de cuanto en cuanto lo quiere, esto podria entrar en conflicto pues los argumentos van en orden a menos que mande como argumento un objeto //TODO:  mande como argumento un objeto
      } else {
        new Texto(iy.toString(), this.x - 55, yInicio - 5, `${this.tamañoTexto}px Arial`).dibujar(); //NOTE: this.x - 55: corre hacia la derecha, yInicio - 5 corre hacia abajo
        iy += this.deCuantoenCuantoY;
      }
    }
    new Texto(this.textoY, this.x, this.y + this.largo + 10).dibujar(); // dibuja "ventas"
  }
  dibujarNumerosX() {
    let ix = 0;
    let lineasEjeX = [];
    let xInicio = this.x;
    console.log(this.x + this.ancho);
    while (xInicio < this.x + this.ancho) {
      this.mover(xInicio, this.y + 10); // el espacio entre cada numero va a ser de 10
      lineasEjeX.push(new Linea(xInicio, this.y - 10).dibujar());
      if (this.deCuantoenCuantoX == 0) {
        new Texto((xInicio - this.x).toString(), xInicio - 20, this.y - 40, `${this.tamañoTexto}px Arial`).dibujar();
      } else {
        new Texto(ix.toString(), xInicio - 20, this.y - 40, `${this.tamañoTexto}px Arial`).dibujar();
        ix += this.deCuantoenCuantoX;
      }
      xInicio += this.espacioX;
    }
    new Texto(this.textoX, this.x + this.ancho + 10, this.y).dibujar(); // dibuja "dias"
  }
}
