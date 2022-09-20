let segundoNumero = document.querySelector('#segundoNumero');
let primeiroNumero = document.querySelector('#primeiroNumero');
let resultado = document.querySelector('#resultado');


function adicao(){
    resultado.innerHTML = parseInt(primeiroNumero.value) + parseInt(segundoNumero.value)
}

function subitracao(){
    resultado.innerHTML = parseInt(primeiroNumero.value) - parseInt(segundoNumero.value)
}

function divisao(){
    resultado.innerHTML = parseInt(primeiroNumero.value) / parseInt(segundoNumero.value)
}

function multiplicacao(){
    resultado.innerHTML = parseInt(primeiroNumero.value) * parseInt(segundoNumero.value)
}

function apagar(){
    location.reload();
}
    