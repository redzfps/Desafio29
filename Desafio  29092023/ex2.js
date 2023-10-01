class Retangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super(base, altura);
    }

    calcularArea() {
        return this.base * this.altura;
    }
}
