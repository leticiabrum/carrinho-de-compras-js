let carrinhoCompras = [];
let produtoSelecionado = document.getElementById('produto').value;
let itemCarrinho = document.createElement('div');

function adicionar() {
    let textoInicial = document.getElementById('texto-inicial-carrinho');
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let produtoSelecionado = document.getElementById('produto').value;


    if (carrinhoCompras.length == 0) {
        carrinhoCompras.push({
            produto: produtoSelecionado,
            unidades: quantidade
        })
    } else {
        itensRepetidos(produtoSelecionado, quantidade);
    }

    if (textoInicial) {
        textoInicial.remove();
    }

    itensCarrinho();
}

function itensCarrinho() {
    let sectionCarrinho = document.getElementById('carrinho-box');
    let itemCarrinho = document.createElement('div');
    let itemProduto = document.createElement('span');
    let itemUnidade = document.createElement('span');

    itemUnidade.classList.add('texto-azul');
    itemCarrinho.classList.add('produto-carrinho')
    itemCarrinho.id = 'item-carrinho';

    for (let i = 0; i < carrinhoCompras.length; i++) {
        itemProduto.textContent = carrinhoCompras[i].produto;
        itemUnidade.textContent = carrinhoCompras[i].unidades + "x ";
        itemCarrinho.appendChild(itemUnidade);
        itemCarrinho.appendChild(itemProduto);
    }

    console.log('ok')
    sectionCarrinho.appendChild(itemCarrinho);
}


function itensRepetidos(produtoSelecionado, quantidade) {

    for (let i = 0; i < carrinhoCompras.length; i++) {
        if (carrinhoCompras.length > 0 && produtoSelecionado === carrinhoCompras[i].produto) {
            console.log('é igual');
            carrinhoCompras[i].unidades += quantidade
        } else {
            carrinhoCompras.push({
                produto: produtoSelecionado,
                unidades: quantidade
            })
        }
    }

}

function limpar() {
    let quantidade = parseInt(document.getElementById('quantidade').value = 1);
    let listaDeProdutos = document.getElementById('carrinho-box');
    let textoFinal = document.createElement('span');
    textoFinal.id = 'texto-inicial-carrinho';

    if (carrinhoCompras.length > 0) {
        carrinhoCompras = [];
    }


    while (listaDeProdutos.firstChild) {
        listaDeProdutos.removeChild(listaDeProdutos.firstChild);
    }

    textoFinal.textContent = "Carrinho vazio";
    listaDeProdutos.appendChild(textoFinal);
    console.log(listaDeProdutos);

}