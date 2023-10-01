class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super(raio, raio); 
    }

    calcularArea() {
        return Math.PI * Math.pow(this.base, 2);
    }
}
