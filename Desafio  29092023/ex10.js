class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
}

class Gato extends Animal {
    miar() {
        console.log(`${this.nome} está miando.`);
    }
}

const gato = new Gato("Miaú", "Gato");

gato.miar();
