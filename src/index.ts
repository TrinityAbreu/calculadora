const valor1 = document.getElementById('num1') as HTMLInputElement;
const valor2 = document.getElementById('num2') as HTMLInputElement;
const somar = document.getElementById('somar') as HTMLElement;
const subtrair = document.getElementById('subtrair') as HTMLElement;
const dividir = document.getElementById('dividir') as HTMLElement;
const multi = document.getElementById('multiplicar') as HTMLElement;
const result = document.getElementById('result') as HTMLElement;
const resultadoRaiz = document.getElementById('resultRaiz') as HTMLElement;
const raizQuadrada = document.getElementById('numRaizQuadrada') as HTMLInputElement;
const fazerCalucloRaiz = document.getElementById('raizQuadrada') as HTMLElement;


function atualizarResultadoRaiz(valor: number){
 resultadoRaiz.textContent = `Resultado: ${valor}`
}

function fazerRaizQuadrada(numero: number): number {
 return Math.sqrt(numero);
}

fazerCalucloRaiz.addEventListener('click', function(){
 const resultado = fazerRaizQuadrada(Number(raizQuadrada.value))
 atualizarResultadoRaiz(resultado);
})


type Operacoes = "SOMAR" | "SUBTRACAO" | "DIVISAO" | "MULTIPLICACAO"

interface Valores {
 tipo: Operacoes;
 a: number;
 b: number;
}

function calculo({a, b, tipo}: Valores) {
 if (tipo === 'SOMAR') {
  return a + b;
 } else if (tipo === 'SUBTRACAO'){
  return a - b;
 } else if (tipo === 'DIVISAO'){
  return a / b;
 } else {
  return a * b;
 }
}


function atualizarResultado(valor: number) {
 result.textContent = `Resultado: ${valor}`
}

somar.addEventListener('click', function(){
 const resultado = calculo({
  tipo: "SOMAR",
  a: Number(valor1.value),
  b: Number(valor2.value)
 })
 atualizarResultado(resultado);
})

subtrair.addEventListener('click', function() {
 const resultado = calculo({
  tipo: "SUBTRACAO",
  a: Number(valor1.value),
  b: Number(valor2.value)
 });
 atualizarResultado(resultado);
})

dividir.addEventListener('click', function(){
 const resultado = calculo({
  tipo: "DIVISAO",
  a: Number(valor1.value),
  b: Number(valor2.value)
 });
 atualizarResultado(resultado);
})

multi.addEventListener('click', function() {
 const resultado = calculo({
  tipo: "MULTIPLICACAO",
  a: Number(valor1.value),
  b: Number(valor2.value)
 });
 atualizarResultado(resultado);
})