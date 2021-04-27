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

class EjesCoordenados {
  constructor(x, y, dx, dy, ancho, largo, tamañoTexto, textoX, textoY, sx = 0, sy = 0) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.largo = largo;
    this.dx = dx;
    this.dy = dy;
    this.tamañoTexto = tamañoTexto;
    this.textoX = textoX;
    this.textoY = textoY;
    this.sx = sx;
    this.sy = sy;
  }
  mover(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - y);
  }
  inicializar() {
    this.dibujarLineas();
    this.dibujarNumerosX();
    this.dibujarNumerosY();
  }
  dibujarLineas() {
    /* dibujar linea x */
    this.mover(this.x, this.y);
    let lineaX = new Linea(this.x + this.ancho, this.y).dibujar();
    this.mover(this.x, this.y);
    /* dibujar linea y */
    let lineaY = new Linea(this.x, this.y + this.largo).dibujar();
  }
  dibujarNumerosY() {
    let iy = 0;
    let lineasEjeY = [];
    let yInicio = this.x;
    while (yInicio < this.y + this.largo) {
      this.mover(this.x + 10, yInicio); // el espacio entre cada numero va a ser de 10
      // ¿porque no funciona si dibujo las lineas en un bucle despues? porque la funcion mover no se ejutaria
      lineasEjeY.push(new Linea(this.x - 10, yInicio).dibujar());
      if (this.sy == 0) {
        new Texto((yInicio - this.y).toString(), this.x - 55, yInicio - 5, `${this.tamañoTexto}px Arial`).dibujar();
      } else {
        new Texto(iy.toString(), this.x - 55, yInicio - 5, `${this.tamañoTexto}px Arial`).dibujar();
        iy += this.sy;
      }
      yInicio += this.dy;
    }
    new Texto(this.textoY, this.x, this.y + this.largo + 10).dibujar(); // dibuja "ventas"
  }
  dibujarNumerosX() {
    let ix = 0;
    let lineasEjeX = [];
    let xInicio = this.x;
    while (xInicio < this.x + this.ancho) {
      this.mover(xInicio, this.y + 10); // el espacio entre cada numero va a ser de 10
      lineasEjeX.push(new Linea(xInicio, this.y - 10).dibujar());
      if (this.sx == 0) {
        new Texto((xInicio - this.x).toString(), xInicio - 20, this.y - 40, `${this.tamañoTexto}px Arial`).dibujar();
      } else {
        new Texto(ix.toString(), xInicio - 20, this.y - 40, `${this.tamañoTexto}px Arial`).dibujar();
        ix += this.sx;
      }
      xInicio += this.dx;
    }
    new Texto(this.textoX, this.x + this.ancho + 10, this.y).dibujar(); // dibuja "dias"
  }
}
