
class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

const retangulo = new Retangulo(10, 20);

console.log("Área do Retângulo:", retangulo.calcularArea());
