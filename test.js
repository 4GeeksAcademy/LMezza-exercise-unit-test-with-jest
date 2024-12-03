// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dolar should be 146.2616822429907 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dolar son 146.2616822429907 yenes, entonces 3.5 dolares debe ser (3.5 * 146.2616822429907)
    const expected = 3.5 * 146.2616822429907;

    // Hago mi comparación (la prueba)
    expect(yen).toBeCloseTo(expected); // 1 dolar son 146.26 yenes, entonces 3.5 dollares deberían ser = (3.5 * 146.26)
});

test("One yen should be 0.0055591054313099035 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.5);

    // Si 1 yen son 0.0055591054313099035 pounds, entonces 3.5 yens debe ser (3.5 * 0.0055591054313099035)
    const expected = 3.5 * 0.0055591054313099035;

    // Hago mi comparación (la prueba)
    expect(pound).toBeCloseTo(expected); // 1 yen son 0.0055591054313099035 pounds, entonces 3.5 yens deberían ser = (3.5 * 0.0055591054313099035)
});