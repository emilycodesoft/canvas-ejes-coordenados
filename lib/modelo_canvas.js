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
  relleno(color) {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.ancho, this.alto);
  }
}

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

class Triangulo {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  mover(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - y);
  }
  dibujar() {
    ctx.strokeStyle = this.color;
    this.mover(this.x[0], this.y[0]);
    for (let i = 0; i <= 2; i++) {
      let lineaTriangulo = new Linea(this.x[2 - i], this.y[2 - i]);
      lineaTriangulo.dibujar();
    }
  }
}
class Imagen {
  constructor(imagen, x, y, ancho = 0, alto = 0) {
    this.imagen = imagen;
    this.x = x;
    this.y = canvas.height - y;
    this.ancho = ancho;
    this.alto = alto;
  }
  cargarImagen() {
    let { imagen, x, y, ancho, alto } = this;
    imagen.onload = () => {
      if (ancho === 0 && alto === 0) {
        ctx.drawImage(imagen, x, y, imagen.width, imagen.height);
      } else if (alto === 0) {
        let altoDefault = parseInt((ancho * imagen.height) / imagen.width);
        ctx.drawImage(imagen, x, y, ancho, altoDefault);
      } else {
        ctx.drawImage(imagen, x, y, ancho, alto);
      }
    };
  }
}
