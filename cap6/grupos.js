class Grup {
    #elementos = [];

    add(elemento){
        if (!this.#elementos.has(elemento)) {
            this.#elementos.push(elemento);
        }
    }

    delete(elemento){
        if (this.#elementos.has(elemento)) {
            this.#elementos = this.#elementos.filter(x => x != elemento);
        }
    }

    has (elemento) {
        return this.#elementos.includes(elemento);
    }

    static from(serie) {
        let grup = new Grup;
        for (let value of serie) {
          grup.add(value);
        }
        return grup;
    }
}