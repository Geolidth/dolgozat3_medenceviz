//Csajbók-Reményi László SZOFT-I-2-E 2023.06.06

describe('Számítás tesztelése', () => {
    it('Normál bemenet1: m: 110 sz: 100 h: 100 t:1', () => {
        let actual = calcValue(110,100,100);
        let expected= 1;
        expect(actual).toBeCloseTo(expected, 0.9);
    });

    it('Normál bemenet2: m: 5000 sz: 5000 h: 5000 t:124750', () => {
        let actual = calcValue(5000,5000,5000);
        let expected= 124750;
        expect(actual).toBeCloseTo(expected, 0.9);
    });

    it('Szélsőérték bemenet1: m: 10000 sz: 10000 h: 10000 t:999000', () => {
        let actual = calcValue(10000,10000,10000);
        let expected= 999000;
        expect(actual).toBeCloseTo(expected, 0.9);
    });

    it('Szélsőérték bemenet2: m: 10 sz: 1 h: 1 t:0', () => {
        let actual = calcValue(10,1,1);
        let expected= 0;
        expect(actual).toBeCloseTo(expected, 0.9);
    });
});