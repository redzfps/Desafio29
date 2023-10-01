
class FiguraGeometrica {
    constructor(raio) {
        this.raio = raio;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super(raio);
    }

    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

const circulo = new Circulo(5);

console.log("Área do Círculo:", circulo.calcularArea());
