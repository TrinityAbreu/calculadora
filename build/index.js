"use strict";
const valor1 = document.getElementById('num1');
const valor2 = document.getElementById('num2');
const somar = document.getElementById('somar');
const subtrair = document.getElementById('subtrair');
const dividir = document.getElementById('dividir');
const multi = document.getElementById('multiplicar');
const result = document.getElementById('result');
function calculo({ a, b, tipo }) {
    if (tipo === 'SOMAR') {
        return a + b;
    }
    else if (tipo === 'SUBTRACAO') {
        return a - b;
    }
    else if (tipo === 'DIVISAO') {
        return a / b;
    }
    else {
        return a * b;
    }
}
function atualizarResultado(valor) {
    result.textContent = `Resultado: ${valor}`;
}
somar.addEventListener('click', function () {
    const resultado = calculo({
        tipo: "SOMAR",
        a: Number(valor1.value),
        b: Number(valor2.value)
    });
    atualizarResultado(resultado);
});
subtrair.addEventListener('click', function () {
    const resultado = calculo({
        tipo: "SUBTRACAO",
        a: Number(valor1.value),
        b: Number(valor2.value)
    });
    atualizarResultado(resultado);
});
dividir.addEventListener('click', function () {
    const resultado = calculo({
        tipo: "DIVISAO",
        a: Number(valor1.value),
        b: Number(valor2.value)
    });
    atualizarResultado(resultado);
});
multi.addEventListener('click', function () {
    const resultado = calculo({
        tipo: "MULTIPLICACAO",
        a: Number(valor1.value),
        b: Number(valor2.value)
    });
    atualizarResultado(resultado);
});
