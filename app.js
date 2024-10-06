const { hello } = require('./app'); // Importa la función hello del archivo app.js

test('debería decir Hola Mundo', () => {
    expect(hello()).toBe('Hola Mundo'); // Verifica que hello() retorna "Hola Mundo"
});
