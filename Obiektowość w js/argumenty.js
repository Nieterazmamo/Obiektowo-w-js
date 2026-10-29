class Argumenty {

    static przedstawSie(...args) {

        if (args.length == 2) {

            console.log(`Nazywam się ${args[0]} ${args[1]}`);
            return `Nazywam się ${args[0]} ${args[1]}`;

        } else {

            console.log(`Mam na imię ${args[0]}`);
            return `Mam na imię ${args[0]}`;
            
        }
    }
};

Argumenty.przedstawSie("Jan", "Kowalski");
Argumenty.przedstawSie("Anna");