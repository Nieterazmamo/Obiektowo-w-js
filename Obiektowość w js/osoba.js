function Osoba(imie) {
    this.imie = imie;
}

Osoba.prototype.powitaj = function() {
    return `Cześć, mam na imię ${this.imie}.`;
};


function Uczen(imie, oceny) {
    Osoba.call(this, imie); 
    this.oceny = oceny;     
}


Uczen.prototype = Object.create(Osoba.prototype);
Uczen.prototype.constructor = Uczen; 

Uczen.prototype.obliczSrednia = function() {
    if (this.oceny.length === 0) return 0;
    
    let suma = 0;
    for (let i = 0; i < this.oceny.length; i++) {
        suma += this.oceny[i];
    }
    return suma / this.oceny.length;
};

let mojUczen = new Uczen("Ania", [4, 5, 3, 4, 5]);

console.log(mojUczen.powitaj());                      
console.log("Średnia ocen:", mojUczen.obliczSrednia()); 