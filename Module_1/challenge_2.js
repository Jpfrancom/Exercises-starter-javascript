function pares(x, y) {
    while (x != y) {
        x += 1
        if (x % 2 == 0) {
            console.log(`O número ${x} é par`);
        };
    };
};

pares(32, 321);