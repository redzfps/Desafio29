class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
}

class Cachorro extends Animal {
    latir() {
        console.log(`${this.nome} está latindo.`);
    }
}


const cachorro = new Cachorro("Totó", "Cachorro");

cachorro.latir();
