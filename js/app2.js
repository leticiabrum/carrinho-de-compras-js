function adicionar() {
//recuperar valores: nome do produto, quantidade, valor e texto inicial;
let textoInicial = document.getElementById('texto-inicial-carrinho').textContent;
let quantidade = document.getElementById('quantidade').value;
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorProduto = produto.split('$')[1];
//adicionar os valores no carrinho;
//calcular o subtotal;
//calcular o totalFinal;
//remover o textoInicial;

// console.log(valorProduto); tudo conferido!
}

function limpar() {

}