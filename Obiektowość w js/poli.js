// /\/\/\/\/\/\/\/\ Klasy /\/\/\/\/\/\/\/\

class Psowate {
    constructor(Imie, Wiek) {
        this.Imie = Imie;
        this.Wiek = Wiek;
    }


    DajGlos() {


    }

}

class Pies extends Psowate {
    constructor(Imie, Wiek) {
        super(Imie, Wiek);
    }

    DajGlos() {

        console.log(`Pies ${this.Imie} szczeka.`);
    }
}


class Wilk extends Psowate {
    constructor(Imie, Wiek) {
        super(Imie, Wiek);
    }

    DajGlos() {

        console.log(`Wilk ${this.Imie} wyje.`);
    }

}


class Szczeniak extends Psowate {
    constructor(Imie, Wiek) {
        super(Imie, Wiek);
    }

    DajGlos() {

        console.log(`Szczeniak ${this.Imie} piszczy.`);
    }
    
}

// /\/\/\/\/\/\/\/\         /\/\/\/\/\/\/\/\
// /\/\/\/\/\/\/\/\ Obiekty /\/\/\/\/\/\/\/\
// /\/\/\/\/\/\/\/\         /\/\/\/\/\/\/\/\


function Psowate(Imie, Wiek) {
    this.Imie = Imie;
    this.Wiek = Wiek;
}

Psowate.prototype.DajGlos = function() {
    console.log(`Psowate ${this.Imie} wydaje dźwięk.`);
}

function Pies(Imie, Wiek) {
    Psowate.call(this, Imie, Wiek);
}

Pies.prototype = Object.create(Psowate.prototype);
Pies.prototype.constructor = Pies;

Pies.prototype.DajGlos = function() {
    console.log(`Pies ${this.Imie} szczeka.`);
}

function Wilk(Imie, Wiek) {
    Psowate.call(this, Imie, Wiek);
}

Wilk.prototype = Object.create(Psowate.prototype);
Wilk.prototype.constructor = Wilk;  

Wilk.prototype.DajGlos = function() {
    console.log(`Wilk ${this.Imie} wyje.`);
}

function Szczeniak(Imie, Wiek) {
    Psowate.call(this, Imie, Wiek);
}   

Szczeniak.prototype = Object.create(Psowate.prototype);
Szczeniak.prototype.constructor = Szczeniak;

Szczeniak.prototype.DajGlos = function() {
    console.log(`Szczeniak ${this.Imie} piszczy.`);
}
