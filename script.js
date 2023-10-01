var visor = document.getElementById("visor");
var operacao;
var resultado;
var numeros = visor.value.split(operacao);
var contador = 0;
var data;
// Adicionar números.
function add_numero(num) {
  if (visor.value.length < 10) {
    // limitei a 10 a entrada de digitos!
    if (visor.value === "") {
      visor.value = num;
    } else {
      visor.value = visor.value + num;
    }
  }
}
// Apagar dígito.
function apagar_digito() {
  visor.value = visor.value.substring(0, visor.value.length - 1); // apaga o ultimo caractere da string.
}

// Apagar visor.
function apagar() {
  visor.value = "";
}
// validação para nao repetir o operador de forma consecutiva e limitar o numero de operação em somente 1!
function add_operador(op) {
  if (visor.value.length < 10) {
    // limitei a entrada de operador de acordo com o número de digitos do display!
    if (
      visor.value.indexOf("/") === -1 &&
      visor.value.indexOf("*") === -1 &&
      visor.value.indexOf("+") === -1 &&
      visor.value.indexOf("-") === -1
    ) {
      if (visor.value === "" || visor.value === "0") {
        visor.value = 0 + op;
      } else {
        visor.value = visor.value + op;
      }
    }
  }
  operacao = op; // vai ser usada na função total, para efeito de cálculos !
}

function add_ponto(){

}

// função calcular sem o método "eval"!
function total() {
  numeros = visor.value.split(operacao);
  // tratativa para se não houver operador no visor, manter o mesmo valor no visor!
  if (
    visor.value.indexOf("/") === -1 &&
    visor.value.indexOf("*") === -1 &&
    visor.value.indexOf("+") === -1 &&
    visor.value.indexOf("-") === -1
  ) {
    visor.value = visor.value;
  } else if (visor.value === "") {
    //  tratativa para visor vazio, manter valor vazio !
    visor.value = "";
  } else {
    if (operacao === "/") {
      visor.value = numeros[0] / numeros[1];
    } else if (operacao === "*") {
      visor.value = numeros[0] * numeros[1];
    } else if (operacao === "+") {
      visor.value = parseInt(numeros[0]) + parseInt(numeros[1]); // sem o parseInt, estava concatenando!
    } else if (operacao === "-") {
      visor.value = numeros[0] - numeros[1];
    }
  }

  resultado = numeros[0] + operacao + numeros[1] + " = " + visor.value;
  data = new Date();
  historico(contador);
  // controlar os valores do histórico!
  if (contador < 3) {
    contador = contador + 1;
  } else {
    contador = 0;
  }
}

function historico(contador) {
  // tem que reduzir esse trecho do código!
  if (contador === 0) {
    document.getElementById("data1").value = data.toLocaleString();
    document.getElementById("resultado1").value = resultado;
  } else if (contador === 1) {
    document.getElementById("data2").value = data.toLocaleString();
    document.getElementById("resultado2").value = resultado;
  } else if (contador === 2) {
    document.getElementById("data3").value = data.toLocaleString();
    document.getElementById("resultado3").value = resultado;
  } else {
    document.getElementById("data4").value = data.toLocaleString();
    document.getElementById("resultado4").value = resultado;
  }
}

function apagarHistorico() {
  document.getElementById("data1").value = '';
  document.getElementById("resultado1").value = '';
  document.getElementById("data2").value = '';
  document.getElementById("resultado2").value = '';
  document.getElementById("data3").value = '';
  document.getElementById("resultado3").value = '';
  document.getElementById("data4").value = '';
  document.getElementById("resultado4").value = '';
  contador=0;
}
