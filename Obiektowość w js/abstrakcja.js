class SrodekTransportu {
    constructor(nazwa) {
        this.nazwa = nazwa;
    }

    jedz() {

        throw new Error("Nie można użyć klasy abstrakcyjnej bezpośrednio.");

    }

}

class Auto extends SrodekTransportu {
    constructor(nazwa) {
        super(nazwa);
    }

    jedz() {

        console.log(`Samochód ${this.nazwa} jedzie.`);

    }

}

class Samolot extends SrodekTransportu {
    constructor(nazwa) {
        super(nazwa);
    }

    jedz() {

        console.log(`Samolot ${this.nazwa} leci.`);

    }

}

class Lodz extends SrodekTransportu {
    constructor(nazwa) {
        super(nazwa);
    }

    jedz() {

        console.log(`Łódka ${this.nazwa} pływa.`);

    }

}


new Auto("Toyota").jedz();