function adicionar() {
    let valorTotalFinal = document.getElementById('valor-total').textContent;
    let textoInicial = document.getElementById('texto-inicial-carrinho');
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('$')[1];
    let subtotal = quantidade * valorProduto;

    let textoSubtotal = 'R$' + subtotal;

    if (textoInicial) {
        textoInicial.remove();
    }

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<div class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul">${textoSubtotal}</span>
    </div>`;

    valorTotalFinal.textContent = subtotal + subtotal;
    console.log(valorTotalFinal)
}


function limpar() {

}