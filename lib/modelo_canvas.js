const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

/* color del ctx */
/* ctx.fillStyle = 'pink';
ctx.fillRect(0, 0, canvas.width, canvas.height); */

/* tamaño de canvas */

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
/* Rectangulo lleno y rectangulo sin llenar: polimorfismo */
class Rectangulo {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = canvas.height - y;
    this.ancho = ancho;
    this.alto = alto;
  }
  mover(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - y);
  }
  dibujar() {
    ctx.strokeRect(this.x, this.y, this.ancho, this.alto);
  }
}
/* dibujar, mover y algunos valores del constructor x y, ancho alto --> polimorfismo */

/* circulo y arco --> polimorfismo */
class Circulo {
  constructor(x, y, radio, colorRelleno, colorBorde) {
    this.x = x;
    this.y = canvas.height - y;
    this.radio = radio;
    this.colorRelleno = colorRelleno;
    this.colorBorde = colorBorde;
  }
  dibujar() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
    ctx.fillStyle = this.colorRelleno;
    ctx.strokeStyle = this.colorBorde;
    ctx.fill();
    ctx.stroke();
  }
}
class Arco {
  constructor(x, y, radio, inicioAngulo, finalAngulo, colorRelleno, colorBorde) {
    this.x = x;
    this.y = canvas.height - y;
    this.radio = radio;
    this.inicioAngulo = inicioAngulo;
    this.finalAngulo = finalAngulo;
    this.colorRelleno = colorRelleno;
    this.colorBorde = colorBorde;
  }
  dibujar() {
    ctx.beginPath();
    let { x, y, radio, inicioAngulo, finalAngulo } = this;

    ctx.arc(x, y, radio, 2 * Math.PI - inicioAngulo, 2 * Math.PI - finalAngulo, true);
    ctx.fillStyle = this.colorRelleno;
    ctx.strokeStyle = this.colorBorde;
    ctx.fill();
    ctx.stroke();
  }
}

class Texto {
  constructor(texto, x, y, fuente) {
    this.texto = texto;
    this.x = x;
    this.y = canvas.height - y;
    this.fuente = fuente;
  }
  dibujar() {
    ctx.font = this.fuente;
    ctx.fillText(this.texto, this.x, this.y);
  }
}
