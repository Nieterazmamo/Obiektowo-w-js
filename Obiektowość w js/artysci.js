class Artysta {
    constructor(nazwa) {
        this.nazwa = nazwa;
    }

    tworzDzielo() {
        throw new Error("Nie można użyć klasy abstrakcyjnej bezpośrednio.");
    }

    kontempluj() {
        throw new Error("Nie można użyć klasy abstrakcyjnej bezpośrednio.");
    }

}

class Malarz extends Artysta {
    constructor(nazwa) {
        super(nazwa);
    }       

    tworzDzielo() {
        console.log(`Malarz ${this.nazwa} maluje obraz.`);
    }   

    kontempluj() {
        console.log(`Malarz ${this.nazwa} kontempluje swoje dzieło z zachwytem.`);
    }

}

class Rzezbiarz extends Artysta {
    constructor(nazwa) {
        super(nazwa);
    }
    
    tworzDzielo() {
        console.log(`Rzeźbiarz ${this.nazwa} rzeźbi w kamieniu.`);
    }

    kontempluj() {
        console.log(`Rzeźbiarz ${this.nazwa} kontempluje swoje dzieło z dumą.`);
    }

}

class Pisarz extends Artysta {
    constructor(nazwa) {
        super(nazwa);
    }
    
    tworzDzielo() {
        console.log(`Pisarz ${this.nazwa} pisze powieść.`);
    }

    kontempluj() {
        console.log(`Pisarz ${this.nazwa} kontempluje swoje dzieło z zainteresowaniem.`);
    }

}