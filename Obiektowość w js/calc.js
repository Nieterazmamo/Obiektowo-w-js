class Kalkulator {
    


    static dodaj(a, b) {

        console.log(a + b);
        return a + b ;

    }

    static odejmij(a, b) {

        console.log(a - b);
        return a - b;

    }

    static przemnoz(a, b) {

        console.log(a * b);
        return a * b;

    }

    static podziel(a, b) {

        if (b === 0) {
            console.log("Nie dziel przez 0!!!")
            return "Błąd: Dzielenie przez zero";
        }
        console.log(a / b);
        return a / b;

    }

}

Kalkulator.dodaj(10, 5);
Kalkulator.odejmij(10, 5);
Kalkulator.przemnoz(10, 5);
Kalkulator.podziel(10, 5);