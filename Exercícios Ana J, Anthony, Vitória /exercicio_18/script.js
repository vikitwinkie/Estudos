var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});

function capturarPrimeiroNumeroInteiro() {
  const primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);
  return primeiro_numero_inteiro;
}

function capturarSegundoNumeroInteiro() {
 const segundo_numero_inteiro = Number(document.getElementById("segundo_numero_inteiro").value); 
 return segundo_numero_inteiro;
}


function somar() {
  let primeiro_numero_inteiro = capturarPrimeiroNumeroInteiro();
  let segundo_numero_inteiro = capturarSegundoNumeroInteiro();
  let resultado_soma = primeiro_numero_inteiro + segundo_numero_inteiro;
  imprimirResultadoNaTela(resultado_soma);
}


function imprimirResultadoNaTela(resultado_soma) {
  document.getElementById("resultado_soma").value = resultado_soma;
}