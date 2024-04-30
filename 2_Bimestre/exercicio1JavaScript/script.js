let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let btSomar = document.querySelector("#btSomar");
let h3Resultado = document.querySelector("#h3Resultado");

function somarValores(){
    let valor1 = Number(ipValor1.value);
    let valor2 = Number(ipValor2.value);
    let resultado = valor1 + valor2;
    h3Resultado.textContent = String(resultado);
}

btSomar.onclick = function(){
    somarValores();
}