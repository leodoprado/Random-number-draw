// capturando evento de submit do formulário
const form = document.querySelector('#formulario');

// prevenindo o envio do evento
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

function pegarValoresHtml() {
    const valorMaximo = document.getElementById('numero-maximo').value
    const quantidadeNumeros = document.getElementById('quantidade-de-numeros').value

    return {
        valorMaximo: Number(valorMaximo),
        quantidadeNumeros: Number(quantidadeNumeros)
    }
}

function gerarNumeroAleatorio(valorMaximo) {
    return Math.ceil(Math.random() * valorMaximo);
}

function criarTdComNumero(numero) {
    const td = document.createElement('td')

    td.textContent = numero

    if (numero < 10) {
        td.textContent = '0' + numero
    }

    return td
}

function mostrarNumerosNoHtml(numeros) {
    const { quantidadeNumeros } = pegarValoresHtml()
    const listaE = document.getElementById('lista')

    for (let i = 0; i < quantidadeNumeros; i++) {
        const td = criarTdComNumero(numeros[i]);
        listaE.appendChild(td)
    }
}

function sortear() {

    const { valorMaximo, quantidadeNumeros } = pegarValoresHtml()

    if (valorMaximo < quantidadeNumeros) {
        alert('Valor máximo não pode ser menor que a quantidade de números')
        return
    }

    const numeros = new Set(gerarNumerosAleatorios())
    
    if (numeros.size < quantidadeNumeros) {
        while (numeros.size < quantidadeNumeros) {
            numeros.add(gerarNumeroAleatorio(valorMaximo))
        }
    }

    mostrarNumerosNoHtml([...numeros])
}

function gerarNumerosAleatorios() {
    const { valorMaximo, quantidadeNumeros } = pegarValoresHtml()

    let numeros = []
    for (let i = 0; i < quantidadeNumeros; i++) {
        const numeroAleatorio = gerarNumeroAleatorio(valorMaximo)
        numeros.push(numeroAleatorio)
    }

    return numeros
}

function limpar() {
    numeros.splice (0, numeros.length);
}