//Csajbók-Reményi László SZOFT-I-2-E 2023.06.06

describe('Input tesztelés', () => {
    it('Szám1', () => {
        let actual = checkInput(30);    //A 30 jó adat
        expect(actual).toBe(true);
    });

    it('Szám2', () => {
        let actual = checkInput(0);     //a 0 hibás adat
        expect(actual).toBe(false);
    });

    it('Szöveg', () => {
        let actual = checkInput('a');   //a karakter hibás adat
        expect(actual).toBe(false);
    });

    it('Hibás szám', () => {
        let actual = checkInput(-50);   //-50 hibás adat
        expect(actual).toBe(false);
    });
});