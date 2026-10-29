class KontoBankowe {

    #saldo = 0;

    constructor() {
        
    }

    get saldo() {
        
        return this.#saldo

    }

    deposit(amount) {
        
        this.#saldo += amount; 

    }

    withdraw(amount) {
        
        if (this.#saldo > amount) {
            this.#saldo -= amount; 
        } else {
            console.log("Nie posiadasz takich środków na koncie");
            // alert("Nie posiadasz takich środków na koncie");
        }

    }
}

KontoBankowe1 = new KontoBankowe();

    KontoBankowe1.deposit(1000);
    console.log(KontoBankowe1.saldo);
    
    KontoBankowe1.withdraw(500);
    console.log(KontoBankowe1.saldo);

    KontoBankowe1.withdraw(600);
